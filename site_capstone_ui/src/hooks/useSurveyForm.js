import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "services/apiClient"
import { useSurveyContext } from "contexts/survey"

export const useSurveyForm= () => {
  const { setSurvey } = useSurveyContext()
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

    if (data?.survey) {
      setSurvey((e) => [data.survey, ...e])
      setIsLoading(false)
      navigate("/survey")
    } else {
      setIsLoading(false)
    }
  }

  const handleOnInputChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }


  
  return {
    form,
    errors,
    isLoading,
    handleOnSubmit,
    handleOnInputChange,
  }
}