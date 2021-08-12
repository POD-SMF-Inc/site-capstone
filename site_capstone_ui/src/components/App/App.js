import './App.css';
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom" ;
import LocalDataState from '../../contexts/LocalDataState';
import Home from "../Home/Home"
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
//import Footer from '../Footer/Footer';
import apiClient from '../../services/apiClient';
import Planner from '../Planner/Planner';
import Weekly from '../Weekly/Weekly';
import Favorites from '../Favorites/Favorites';
import Details from '../Details/Details';
import VideoPage from '../VideoPage/VideoPage';
import Profile from '../Profile/Profile';
import Survey from "../Survey/Survey"
import Filter from '../Filter/Filter';
import Ingredients from "../Ingredients/Ingredients"
import ThemeContextProvider from "../../contexts/ThemeContext";
import Chatbot from "../Chatbot/Chatbot"
import ShoppingList from "../ShoppingList/ShoppingList"
import NotFound from "../NotFound/NotFound"
import EditProfile from "../EditProfile/EditProfile";



export default function App() {
  const [user, setUser] = useState({})
  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  
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

  return (
    <ThemeContextProvider>
    <LocalDataState>
    <div className="App">
        {!isLoading ? 
        <>
        <Navbar user={appState?.user} handleLogout={handleLogout} isLoading={isLoading}/>
        <Routes>
          <Route path='/' element={ <Home user={appState?.user}/> } />
          <Route path='/register' element={ <Register  setAppState={setAppState}/>} />
          <Route path='/login' element={ <Login  setAppState={setAppState} /> } />
          <Route path='/favorites' element={ <Favorites appState={appState} user={appState?.user} setAppState={setAppState}/>} />
          <Route path='/weeklyp' element={ <Weekly appState={appState} user={appState?.user} setAppState={setAppState}/>} />
          <Route path='/details/:idNum' element={<Details appState={appState} user={appState?.user} setAppState={setAppState}/>} />
          <Route path='/planner' element= { <Planner  appState={appState} user={appState?.user} setAppState={setAppState}/>} />
          <Route path='/profile' element= { <Profile  appState={appState} user={appState?.user} isLoading={isLoading}  setAppState={setAppState}/>} />
          <Route path='/edit' element= { <EditProfile appState={appState} user={appState?.user} /> } /> 
          <Route path='/survey' element= { <Survey  appState={appState} user={appState?.user} setAppState={setAppState}/> } /> 
          <Route path='/explore' element= {<Filter  appState={appState} user={appState?.user} setAppState={setAppState}/>} /> 
          <Route path='/ingredients' element={<Ingredients appState={appState} user={appState?.user} setAppState={setAppState}/>} />
          <Route path='/tutorials' element={<VideoPage appState={appState} user={appState?.user} setAppState={setAppState}/>} />
          <Route path='/list' element={<ShoppingList appState={appState} user={appState?.user} setAppState={setAppState}/>}/>
          <Route path= "*" element={<NotFound />} />

        </Routes>
        </> : null }

    </div>
    </LocalDataState>
    </ThemeContextProvider>
  )
}



