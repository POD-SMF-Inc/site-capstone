import { createContext, useState, useContext, useEffect } from "react"
import { useAuthContext } from "../contexts/auth"
import apiClient from "../services/apiClient"

const SurveyContext = createContext(null)

export const SurveyContextProvider = ({ children }) => {
  const { user } = useAuthContext()
  const [initialized, setInitialized] = useState(false)
  const [survey, setSurvey] = useState([])

  useEffect(() => {
    const fetchUserSurvey = async () => {
      const { data } = await apiClient.fetchUserSurvey(user)
      if (data?.survey) 
      setSurvey(data.survey)
      setInitialized(true)
    }

    if (user?.username) {
      fetchUserSurvey()
    }

  }, [user])

  const value = { survey, setSurvey, initialized }

  return (
    <SurveyContext.Provider value={value}>
      <>{children}</>
    </SurveyContext.Provider>
  )
}

export const useSurveyContext = () => useContext(SurveyContext)