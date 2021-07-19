import './App.css';
import { useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import API from '../../services/apiClient'
import Planner from '../Planner/Planner';

import Profile from '../Profile/Profile';
import Survey from "../Survey/Survey"

import SeperateRecipe from '../SeperateRecipe/SeperateRecipe';
import Practice from '../Practice/Practice';
import RecipeCalls from '../RecipeCalls/RecipeCalls';
export default function App() {

  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const handleLogout = async () => {
    await API.logoutUser()
    setAppState({})
    console.log("app", appState)
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
          <Route path='/planner' element={ <Planner  setAppState={setAppState}/>} />
          <Route path='/profile' element={ <Profile  setAppState={setAppState}/>} />
          

          <Route path= '/survey' element={ <Survey /> } />
          <Route path='/prac' element={<Practice />} />
          <Route path='/sep' element={<SeperateRecipe />} />
          <Route path='/reci' element={<RecipeCalls />} />
        </Routes>
        </> : null }
      </BrowserRouter>
      <Footer/>
    </div>
  )
}



