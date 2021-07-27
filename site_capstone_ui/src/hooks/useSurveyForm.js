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
    schoolName: '',
  })

  const [errors, setErrors] = useState({})

  const handleOnSubmit = async () => {
    setIsLoading(true)

    const { data, error } = await apiClient.surveyInfo(form)
    if (error) setErrors((e) => ({ ...e, form: error }))

    if (data) {
      setSurvey((e) => [data.survey, ...e])
     // setIsLoading(false)
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
      setSurvey((e) => [data.survey, ...e])
      //setIsLoading(false)
      navigate("/profile")
    
  }

  setIsLoading(false)

}


const handleOnSubmitSkip = async () => {
  setIsLoading(true)

  const { data, error } = await apiClient.surveyInfo(form)
  if (error) setErrors((e) => ({ ...e, form: error }))

  if (data) {
    setSurvey((e) => [data.survey, ...e])
    //setIsLoading(false)
    navigate("/profile")
  
}

setIsLoading(false)

}


  return {
    form,
    errors,
    survey,
    isLoading,
    handleOnSubmit,
    handleOnSubmitSave,
    handleOnSubmitSkip,
    handleOnInputChange,
  }
}