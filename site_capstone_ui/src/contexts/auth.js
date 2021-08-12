import { createContext, useState, useContext, useEffect } from "react"
import apiClient from "../services/apiClient"

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false)
  const [user, setUser] = useState({})
  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const handleLogout = async () => {
    await apiClient.logoutUser()
    setAppState({})
    setUser({})
    setErrors(null)
  }

    /** Fetch user by token generated */
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)

      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setAppState((a) => ({...a, user: data.user}))
      }
      setIsLoading(false)
    }

    // only set token if it exists
    const token = localStorage.getItem("tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }    
  }, [setUser])

  const authValue = { user, setUser, handleLogout, initialized }

  return (
    <AuthContext.Provider value={authValue}>
      <>{children}</>
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

export const selectIsUserAuthenticated = (user, initialized) => initialized && user?.username