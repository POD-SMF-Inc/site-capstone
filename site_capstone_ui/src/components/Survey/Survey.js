import { useNavigate } from "react-router-dom"
import { useSurveyForm } from "../../hooks/useSurveyForm"

//skip button 

import "./Survey.css"
import Card from '../Card/Card';
import PageH from '../PageH/PageH'



export default function Survey () {

  const { form, errors, isLoading, handleOnSubmitSave, handleOnSubmitSkip, handleOnInputChange } = useSurveyForm()

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
              <label align='left' htmlFor='description'> Fun Facts </label>
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
            {errors.form && <span className="error">{errors.form}</span>}
            <button className='save-btn' onClick={handleOnSubmitSave}> 
            {isLoading ? <>Loading</> : <>Save</>}
          </button>
          </div>
        </div>
        </Card>
        </div>
    )
  }