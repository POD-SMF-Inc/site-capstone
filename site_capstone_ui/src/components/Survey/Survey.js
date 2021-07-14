import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"

//skip button 

import "./Survey.css"
import API from '../../services/apiClient'
import Card from '../Card/Card';
import Register from '../Register/Register'
import PageH from '../PageH/PageH'



export default function Survey({ user, setAppState}) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      diet: '',
      intolerances: '',
      cuisines: '',
      description: '',
      location: '',
      image: '',
      schoolName: '',
    })
  
    const handleOnInputChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
  
    const handleOnSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, form: null }))
  
      const { data, error } = await API.fetchUserSurvey({ form })
      if (data) {
          navigate("/survey")
          setAppState((a) => ({...a, user: data.user}))
       
      }

      if (error) {
        console.log(errors)
        setErrors((e) => ({ ...e, form: error }))
        setIsLoading(false)
        return
      }
      setIsLoading(false)
    }

    return (
      <div className="Survey">
        <Card className ="login-card">
        <PageH sectionName='Login'/>
        <div className='form'>
          <div className='form-fields'>
            <div className='form-input'>
              <label align='left' htmlFor='diet'>What is your diet?</label>
              <input 
              type='diet' 
              name='diet' 
              placeholder='for example: vegan' 
              value={form.diet} 
              onChange={handleOnInputChange}/>
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='intolerances'>What are your food intolerances?</label>
              <input 
              type='intolerances' 
              name='intolerances' 
              placeholder='for example: lactose intolerant' 
              value={form.intolerances} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='cuisines'>What are your favorite foods?</label>
              <input 
              type='cuisines' 
              name='cuisines' 
              placeholder='for example: chicken alfredo pasta' 
              value={form.cuisines} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='description'>Tell us about yourself</label>
              <input 
              type='description' 
              name='description' 
              value={form.description} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='location'>Where are you located?</label>
              <input 
              type='location' 
              name='location' 
              placeholder='for example: West California' 
              value={form.location} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='schoolName'>What college do you attend?</label>
              <input 
              type='schoolName' 
              name='schoolName' 
              value={form.schoolName} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='image'>Upload a profile image</label>
              <input 
              type='profileImage' 
              name='profileImage' 
              placeholder='You can skip this and upload an image later' 
              value={form.profileImage} 
              onChange={handleOnInputChange}/>
            </div>
            {errors.form && <span className="error">{errors.form}</span>}
            <button className='login-btn' onClick={handleOnSubmit}>
              {isLoading ? <>Loading</> : <>Survey</>}
            </button>
          </div>
        </div>
        </Card>
        </div>
    )
  }