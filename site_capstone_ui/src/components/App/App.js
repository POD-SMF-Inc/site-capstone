import './App.css';
import { useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
import API from '../../services/apiClient'

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

        
        </Routes>
        </> : null }
      </BrowserRouter>
    </div>
  )
}



