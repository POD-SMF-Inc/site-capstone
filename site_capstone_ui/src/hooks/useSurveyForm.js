import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../services/apiClient"

export const useSurveyForm = () => {
  const [survey, setSurvey] = useState({})
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    diet: '',
    intolerances: '',
    cuisines: '',
    description: '',
    location: '',
    schoolname: '',
    image: ''
  })

  const [errors, setErrors] = useState({})

  const handleOnSubmit = async () => {
    setIsLoading(true)

    const { data, error } = await apiClient.surveyInfo(form)
    if (error) setErrors((e) => ({ ...e, form: error }))

    if (data) {
      setSurvey(data.survey)
      if (errors) setErrors (errors)
     
      navigate("/survey")
    } 
    
    setIsLoading(false)
    
  }

  const handleOnInputChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }


  const handleOnSubmitSave = async () => {
    setIsLoading(true)

    const { data, error } = await apiClient.surveyInfo(form)
    if (error) setErrors((e) => ({ ...e, form: error }))

    if (data) {
      setSurvey(data.survey)
      
      navigate("/profile")
    
  }

  setIsLoading(false)

}


const handleOnSubmitSkip = async () => {
  setIsLoading(true)

  const { data, error } = await apiClient.surveyInfo(form)
  if (error) setErrors((e) => ({ ...e, form: error }))

  if (data) {
    setSurvey(data.survey)
    
    navigate("/profile")
  
}

setIsLoading(false)

}


  return {
    form,
    errors,
    isLoading,
    handleOnSubmit,
    handleOnSubmitSave,
    handleOnSubmitSkip,
    handleOnInputChange,
  }
}