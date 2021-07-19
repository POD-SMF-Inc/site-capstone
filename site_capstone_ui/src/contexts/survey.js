import { createContext, useState, useContext, useEffect } from "react"
import apiClient from "../services/apiClient"

const SurveyContext = createContext(null)

export const SurveyContextProvider = ({ children }) => {
  
  const [initialized, setInitialized] = useState(false)
  const [survey, setSurvey] = useState([])

  useEffect(() => {
    const fetchUserSurvey = async () => {
      const { data } = await apiClient.fetchUserSurvey()
      if (data?.survey) 
      setSurvey(data.survey)
      setInitialized(true)
    }

    // add authentication 
  }, [])

  const value = { survey, setSurvey, initialized }

  return (
    <SurveyContext.Provider value={value}>
      <>{children}</>
    </SurveyContext.Provider>
  )
}

export const useSurveyContext = () => useContext(SurveyContext)