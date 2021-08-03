import "./EditProfile.css"
import "../Profile/Profile"
import EditProfileCall from "./EditProfileCall"
import { ThemeContext } from "../../contexts/ThemeContext"
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

  
  <div className="modalContainer">
    <div className="titleCloseBtn"> 
    <button onClick = {() => {setOpenModal(false)}}> X </button>
    </div>
    <div className="title"> 
    <h1> Edit Profile </h1>
    </div>
    <div className="body"> 
    {/* <Upload/> */}
    <div className="form-container">
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
            </div>
            </div>
    <div className="footer2">  
    <button onClick = {() => {setOpenModal(false)}} id="cancelBtn"> Cancel </button>
    <EditProfileCall diet={diet} description={description} intolerances={intolerances} schoolname={schoolname} cuisines={cuisines} location={location} image={image} setErrors={setErrors} survey={survey} setSurvey={setSurvey} setOpenModal={setOpenModal} setIsUpdating={setIsUpdating}  />
    </div>
    </div>

)

}