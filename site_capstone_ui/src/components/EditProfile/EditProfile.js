import "./EditProfile.css"
import "../Profile/Profile"
import EditProfileCall from "./EditProfileCall"
//import { ThemeContext } from "../../contexts/ThemeContext"
import React, { useState } from 'react';
import axios from "axios";
import Upload from "../Upload/Upload"
import { useParams } from "react-router-dom"
import Survey from "../Survey/Survey"
import apiClient from "../../services/apiClient"
import NotAuthorized from "../NotAuthorized/NotAuthorized"




export default function EditProfile ( {  survey, setSurvey, errors, setErrors, setOpenModal }) {

  const [isUpdating, setIsUpdating] = useState(false)
  
  const [description, setDescription] = useState(survey.description)
  const [location, setLocation] = useState(survey.location)
  const [diet, setDiet] = useState(survey.diet)
  const [schoolname, setSchoolName] = useState(survey.schoolname)
  const [intolerances, setIntolerances] = useState(survey.intolerances)
  const [cuisines, setCuisines] = useState(survey.cuisines)
  const [image, setImage] = useState(survey.image)
  
  const [newInfo, setNewInfo] = useState({
    description: description,
    location: location,
    diet: diet,
    schoolname: schoolname,
    intolerances: intolerances,
    cuisines: cuisines,
    image:image
  })



/*   const [file, setFile] = useState()

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("image", file)
  
    const result = await axios.patch('/survey', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    console.log(result.data)
  } */


  

return (

  <div className="modalContainer ">
    
    {survey.image}
      <div className='modal-card '>
        <header
          className={`has-background-primary has-text-white modal-card-head `}
        >
          <p className="modal-card-title  has-text-white">Edit Profile</p>
          <button
            className="delete"
            aria-label="close"
            onClick = {() => {setOpenModal(false)}}
          ></button>
        </header>
    
        <section className="modal-card-body"> 
        
       
          <div className='field'>
            <div className="control">
              <label className="label" align='left' htmlFor='description'> About Me: </label>
              <input 
              className="input"
              type='description' 
              name='description' 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}/>
             </div>
          </div>

          <div className='field'>
            <label align='left' className="label" htmlFor='location'>Location:</label>
            <div className="control">
              <input 
               className="input"
               type='location' 
               name='location' 
               value={location} 
               onChange={(e) => setLocation(e.target.value)}/>
            </div>
          </div>

          <div className='field'>
            <label align='left' className="label" htmlFor='diet'>Diet:</label>
            <div className="control">
              <input 
              className="input"
              type='diet' 
              name='diet' 
              value={diet} 
              onChange={(e) => setDiet(e.target.value)}/>
            </div>
          </div>

          <div className='field'>
            <label align='left' className="label" htmlFor='schoolName'>School:</label>
            <div className="control">
              <input 
              className="input"
              type='schoolname' 
              name='schoolname' 
              value={schoolname} 
              onChange={(e) => setSchoolName(e.target.value)}/>
            </div>
          </div>

          <div className='field'>
            <label align='left' className="label" htmlFor='intolerances'>Food Intolerances:</label>
            <div className="control">
              <input 
              className="input"
              type='intolerances' 
              name='intolerances' 
              value={intolerances} 
              onChange={(e) => setIntolerances(e.target.value)}/>
            </div>
          </div>

          <div className='field '>
            <label align='left' className="label" htmlFor='cuisines'>Preferred Cuisines:</label>
            <div className="control">
              <input 
              className="input "
              type='cuisines' 
              name='cuisines' 
              value={cuisines} 
              onChange={(e) => setCuisines(e.target.value)}/>
            </div>
          </div>
          
         
            
        
          {  <Upload/> } 
       
        
        <footer className='modal-card-foot has-background-white '
              style={{ justifyContent: 'center' }}>  
            <EditProfileCall diet={diet} description={description} intolerances={intolerances} schoolname={schoolname} cuisines={cuisines} location={location} image={image} setErrors={setErrors} survey={survey} setSurvey={setSurvey} setOpenModal={setOpenModal} setIsUpdating={setIsUpdating}  />
            <button className="button  round-border   is-outlined is-danger is-bold " onClick = {() => {setOpenModal(false)}} id="cancelBtn"> Cancel </button>
          </footer>
        </section> 
        
        
      </div>
    </div>

)
}

/* <div className="modalContainer">
    <div className="titleCloseBtn"> 
    <button onClick = {() => {setOpenModal(false)}}> X </button>
    </div>
    {survey.image}
    <div className="title"> 
    <h1> Edit Profile </h1>
    <button onClick = {() => {setOpenModal(false)}} id="cancelBtn"> Cancel </button>
    <button className="buttonforsave"  onClick = {() => {setOpenModal(false)}}> Save </button>
    </div>
    <div className="body"> 
    <div className="form-container">
      <section className="modal-content has-background-white py-5 px-5"> 
    <div className='form1-input'>
              <label className="label" align='left' htmlFor='description'> About Me: </label>
              <input 
              type='description' 
              name='description' 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='form1-input'>
              <label align='left' className="label" htmlFor='location'>Location:</label>
              <input 
              type='location' 
              name='location' 
             value={location} 
             onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className='form1-input'>
              <label align='left' className="label" htmlFor='diet'>Diet:</label>
              <input 
              type='diet' 
              name='diet' 
              value={diet} 
              onChange={(e) => setDiet(e.target.value)}/>
            </div>
            <div className='form1-input'>
              <label align='left' className="label" htmlFor='schoolName'>School:</label>
              <input 
              type='schoolname' 
              name='schoolname' 
              value={schoolname} 
              onChange={(e) => setSchoolName(e.target.value)}/>
            </div>
            <div className='form1-input'>
              <label align='left' className="label" htmlFor='intolerances'>Food Intolerances:</label>
              <input 
              type='intolerances' 
              name='intolerances' 
              value={intolerances} 
              onChange={(e) => setIntolerances(e.target.value)}/>
            </div>
            <div className='form1-input'>
              <label align='left' className="label" htmlFor='cuisines'>Preferred Cuisines:</label>
              <input 
              type='cuisines' 
              name='cuisines' 
              value={cuisines} 
              onChange={(e) => setCuisines(e.target.value)}/>
            </div>
            {  <Upload/> } 
            </section>
            </div>
            </div>
    <div className="footer2">  
    <EditProfileCall diet={diet} description={description} intolerances={intolerances} schoolname={schoolname} cuisines={cuisines} location={location} image={image} setErrors={setErrors} survey={survey} setSurvey={setSurvey} setOpenModal={setOpenModal} setIsUpdating={setIsUpdating}  />
    </div>
    </div> */