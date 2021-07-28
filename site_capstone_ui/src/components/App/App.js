import './App.css';
import { useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LocalDataState from '../../contexts/LocalDataState';
import Home from "../Home/Home"
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
//import Footer from '../Footer/Footer';
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
import ThemeContextProvider from "../../contexts/ThemeContext";
import Chatbot from "../Chatbot/Chatbot"
//import { GlobalProvider } from '../../contexts/GlobalState';

import NotFound from "../NotFound/NotFound"



export default function App() {
  const [user, setUser] = useState({})
  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
 
  
  const handleLogout = async () => {
    await apiClient.logoutUser()
    setAppState({})
    setUser({})
    setErrors(null)
    // navigate to home screen 
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

  console.log("userapp:", user)


  return (
    <ThemeContextProvider>
    <LocalDataState>
    <div className="App">
      <BrowserRouter>
        {!isLoading ? 
        <>
        <Navbar user={appState?.user} handleLogout={handleLogout} isLoading={isLoading}/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/register' element={ <Register  setAppState={setAppState}/>} />
          <Route path='/login' element={ <Login  setAppState={setAppState} /> } />
          <Route path='/favorites' element={ <Favorites appState={appState} user={appState?.user}  />} />
          <Route path='/weeklyp' element={ <Weekly appState={appState} user={appState?.user}  />} />
          <Route path='/details/:idNum' element={<Details />} />
          <Route path='/planner' element= { <Planner  appState={appState} user={appState?.user} />} />
          <Route path='/profile' element= { <Profile  appState={appState} user={appState?.user} /> } />
          <Route path= '/survey' element= { <Survey  appState={appState} user={appState?.user} /> } /> 
          <Route path='/sep/' element = {<SeperateRecipe  appState={appState} user={appState?.user} />} /> 
          <Route path='/search/' element= {<Search   appState={appState} user={appState?.user} />} /> 
          <Route path='/explore/' element= {<Filter  appState={appState} user={appState?.user} />} /> 
          <Route path='/ingredients/' element={<Ingredients />} />
          <Route path='/chatbot' element={<Chatbot appState={appState} user={appState?.user} />} />
          <Route path= "*" element= {<NotFound />} />

        </Routes>
        </> : null }
      </BrowserRouter>
      
    </div>
    </LocalDataState>
    </ThemeContextProvider>
  )
}
// </LocalDataState>
//<Footer/>
//<Route path='/prac' element={<Practice />} />
//<Route path='/profile' element={ <Profile  setAppState={setAppState}/>} />


