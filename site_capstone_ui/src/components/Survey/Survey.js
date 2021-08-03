import { useSurveyForm } from "../../hooks/useSurveyForm"
import { useEffect } from "react"
import apiClient from "../../services/apiClient"
import "./Survey.css"
import Card from '../Card/Card';
import PageH from '../PageH/PageH'
import EditProfile from "../EditProfile/EditProfile";
import Profile from "../Profile/Profile";



export default function Survey () {

  const { form, errors, handleOnSubmitSave, handleOnSubmitSkip, handleOnInputChange } = useSurveyForm()


    return (
      <div className="Survey">
        <Card className ="login-card">
        <PageH sectionName='More About You'/>
        <button className='skip-btn' onClick={handleOnSubmitSkip}> 
            {<>Skip</>}
          </button>
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
              placeholder='for example: Italian food' 
              value={form.cuisines} 
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
              <label align='left' htmlFor='schoolname'>What college do you attend?</label>
              <input 
              type='schoolname' 
              name='schoolname' 
              placeholder= 'for example: Columbia University'
              value={form.schoolname} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='description'> Tell us more about yourself </label>
              <input 
              type='description' 
              name='description' 
              placeholder= 'for example: hobbies, fun facts, occupation etc. '
              value={form.description} 
              onChange={handleOnInputChange}/>
            </div>
            {errors.form && <span className="error">{errors.form}</span>}
            <button className='save-btn' onClick={handleOnSubmitSave}> 
            {<>Save</>}
          </button>
          </div>
        </div>
        </Card>
        </div>
    )
  }