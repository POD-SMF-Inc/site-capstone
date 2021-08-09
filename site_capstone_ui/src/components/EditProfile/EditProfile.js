import "./EditProfile.css"
import "../Profile/Profile"
import EditProfileCall from "./EditProfileCall"
//import { ThemeContext } from "../../contexts/ThemeContext"
import React, { useState } from 'react';
import Upload from "../Upload/Upload"
import { useNavigate } from "react-router-dom"
import Survey from "../Survey/Survey"
import apiClient from "../../services/apiClient"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import { useEffect } from "react";
import { Image } from 'cloudinary-react';




export default function EditProfile ( {  user, setUser, survey, setSurvey, errors, setErrors, setOpenModal }) {

/*   const [imageId, setImageId] = useState()



useEffect(() => {
  const loadImage = async () => {
    try {
        const res = await fetch('/api/images');
        const data = await res.json();
        setImageId(data);
    } catch (err) {
        console.error(err);
    }
};

    loadImage();
}, []); */

  
  const [description, setDescription] = useState(survey.description)
  const [location, setLocation] = useState(survey.location)
  const [diet, setDiet] = useState(survey.diet)
  const [schoolname, setSchoolName] = useState(survey.schoolname)
  const [intolerances, setIntolerances] = useState(survey.intolerances)
  const [cuisines, setCuisines] = useState(survey.cuisines)
  const [image, setImage] = useState(survey.image)
  const [isUpdating, setIsUpdating] = useState(false)
  const [newImage, setNewImage] = useState({
    image: ""
  })

   //CLOUDINARY CONFIGURATION:
    //The image to be uploaded
    const [profImage, setProfImage] = useState("");
    const [imageAlt, setImageAlt] = useState(null);
    //The link to be uploaded to cloudinary
    // const [ url, setUrl ] = useState("");

    const uploadImage = () => {
        //data holds key/value pairs 
        const data = new FormData();
        data.append("file", profImage);

        //The upload preset defines the default behavior for uploads
        data.append("upload_preset", "upload");
        //cloudinary dashboard account
        data.append("cloud_name","df16thior");

        const options = {
            method: "POST",
            body: data,
        };

        return fetch(
            'https://api.cloudinary.com/v1_1/df16thior/image/upload',
            options
        )
            .then(res => res.json())
            .then((data,res) => {
              setProfImage(profImage => ({...profImage, image: data.url}))
              setImageAlt(`An image of ${res.original_filename}`)
            })
            .catch(err => setErrors(err))
    };

  // We will create the widget and open it up when clicked.
  const openWidget = () => {
    // create the widget
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "df16thior",
          uploadPreset: "upload",
        },
        (error, result) => {
          // This code only runs and gets the image
          // when we successfully open and upload the image
          if (!error && result && result.event === "success") {
            setProfImage(result.info.secure_url);
            setImageAlt(`An image of ${result.info.original_filename}`);
          }
        }
      )
      .open(); // open up the widget after creation
  };

  

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
    </div>
    <div className="body"> 
    <div className="form-container">
      <section className="modal-content">
        <div className="newImage"> 
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file"/>
            </div>
            <button type="button" className="btn" onClick={uploadImage}>Submit</button>
            <button type="button" className="btn widget-btn" onClick={openWidget}>Upload Via Widget</button>
          </form>
        </section>
        <section className="right-side">
          <label className="label" align="left" htmlFor="description"> Image Selected: </label>
          {profImage && (
            <img src={profImage} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
        </div> 
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
            </section>
            </div>
            </div>
    <div className="footer2">  
    <button onClick = {() => {setOpenModal(false)}} id="cancelBtn"> Cancel </button>
    <EditProfileCall user={user} diet={diet} description={description} intolerances={intolerances} schoolname={schoolname} cuisines={cuisines} location={location} image={image} setErrors={setErrors} survey={survey} setSurvey={setSurvey} setOpenModal={setOpenModal} setIsUpdating={setIsUpdating}  />
    </div>
    </div> */