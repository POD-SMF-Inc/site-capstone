import './App.css';
import { useEffect, useState, createContext} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import API from '../../services/apiClient'
import Planner from '../Planner/Planner';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import Survey from "../Survey/Survey"
import SeperateRecipe from '../SeperateRecipe/SeperateRecipe';
import Filter from '../Filter/Filter';
import Search from "../Search/Search"
import Ingredients from "../Ingredients/Ingredients"
import { AuthContextProvider } from "../../contexts/auth"
import AuthorizedUser from "../NotAuthorized/NotAuthorized"
import NotFound from "../NotFound/NotFound"


export default function App() {

  const [user, setUser] = useState({})
  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const handleLogout = async () => {
    await API.logoutUser()
    setAppState({})
    setUser({})
    setErrors(null)
  }

    /** Fetch user by token generated */
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      console.log("refresh")
      const { data } = await API.fetchUserFromToken()
      if (data) {
        setAppState((a) => ({...a, user: data.user}))
        setUser(data.user)
      }
      setIsLoading(false)
    }

    // only set token if it exists
    const token = localStorage.getItem("tracker_token")
    if (token) {
      API.setToken(token)
      fetchUser()
    }    
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {!isLoading ? 
        <>
        <Navbar user={appState?.user} handleLogout={handleLogout} isLoading={isLoading}/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/register' element={ <Register  setAppState={setAppState}/>} />
          <Route path='/login' element={ <Login  setAppState={setAppState}/>} />
          <Route path='/planner' element= { <Planner  user={user} setUser={setUser} setAppState={setAppState}/>} />
          <Route path='/profile' element= { <Profile  user={user} setUser={setUser} setAppState={setAppState}/>} />
          <Route path= '/survey' element= { <Survey  user={user} setUser={setUser} /> } /> 
          <Route path='/sep/' element = {<SeperateRecipe  user={user} setUser={setUser} />} /> 
          <Route path='/search/' element= {<Search   user={user} setUser={setUser}/>} /> 
          <Route path='/explore/' element= {<Filter  user={user} setUser={setUser} />} /> 
          <Route path='/ingredients/' element={<Ingredients />} />
          <Route path= "*" element= {<NotFound />} />
        </Routes>
        </> : null }
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

//<Route path='/prac' element={<Practice />} />
//<Route path='/profile' element={ <Profile  setAppState={setAppState}/>} />


