import './App.css';
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom" ;
import LocalDataState from '../../contexts/LocalDataState';
import Home from "../Home/Home"
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import apiClient from '../../services/apiClient'
import Planner from '../Planner/Planner';
import Weekly from '../Weekly/Weekly';
import Favorites from '../Favorites/Favorites';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import Survey from "../Survey/Survey"
import SeperateRecipe from '../SeperateRecipe/SeperateRecipe';
import Filter from '../Filter/Filter';
import Search from "../Search/Search"
import Ingredients from "../Ingredients/Ingredients"
import NotFound from "../NotFound/NotFound"
import EditProfile from "../EditProfile/EditProfile";



export default function App() {
  const [user, setUser] = useState({})
  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const [survey, setSurvey] = useState({})

  
  const handleLogout = async () => {
    await apiClient.logoutUser()
    setAppState({})
    setUser({})
    setErrors(null)
    navigate("/") 
  }

    /** Fetch user by token generated */
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      const { data, errors } = await apiClient.fetchUserFromToken()
      if (data) {
        setAppState((a) => ({...a, user: data.user}))
        setUser(data.user)
      }
      if (errors) setErrors (errors)

      setIsLoading(false)
    }

    // only set token if it exists
    const token = localStorage.getItem("tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }    
  }, [])


  useEffect(() => {
    const fetchInfo = async () => {
      const { data, error } = await apiClient.fetchUserSurvey(user)
      if (data) {
        setSurvey(data[0])
      }
      if (error) {
        setErrors((e) => ({ ...e, error }))
      }
    }
    fetchInfo()
  }, [appState.user]) 

  console.log("setSurvey",setSurvey)



  return (
    <LocalDataState>
    <div className="App">
        {!isLoading ? 
        <>
        <Navbar user={appState?.user} handleLogout={handleLogout} isLoading={isLoading}/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/register' element={ <Register  setAppState={setAppState}/>} />
          <Route path='/login' element={ <Login  setAppState={setAppState} /> } />
          <Route path='/favorites' element={ <Favorites appState={appState} user={appState?.user}  />} />
          <Route path='/weeklyp' element={ <Weekly appState={appState} user={appState?.user}  />} />
          <Route path='/details/:idNum' element={<Details />} />
          <Route path='/planner' element= { <Planner  appState={appState} user={appState?.user} />} />
          <Route path='/profile' element= { <Profile  appState={appState} user={appState?.user} survey={survey} setSurvey={setSurvey} isLoading={isLoading}  />} />
          <Route path='/edit' element= { <EditProfile appState={appState} user={appState?.user} survey={survey} setSurvey={setSurvey}  /> } /> 
          <Route path= '/survey' element= { <Survey  appState={appState} user={appState?.user} /> } /> 
          <Route path='/sep/' element = {<SeperateRecipe  appState={appState} user={appState?.user} />} /> 
          <Route path='/search/' element= {<Search   appState={appState} user={appState?.user} />} /> 
          <Route path='/explore/' element= {<Filter  appState={appState} user={appState?.user} />} /> 
          <Route path='/ingredients/' element={<Ingredients />} />
          <Route path= "*" element= {<NotFound />} />

        </Routes>
        </> : null }
      <Footer/>
    </div>
    </LocalDataState>
  )
}
//<Footer/>
//<Route path='/prac' element={<Practice />} />
//<Route path='/profile' element={ <Profile  setAppState={setAppState}/>} />


