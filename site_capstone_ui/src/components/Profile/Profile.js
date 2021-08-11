import './Profile.css'
import React, { useEffect, useState, useContext } from 'react';
//import { useNavigate } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//import IntroductionP from '../IntroductionP/IntroductionP'
//import About from './About'
//import Header from './Header'
//import Post from './Post'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import EditProfile from "../EditProfile/EditProfile"
import apiClient from "../../services/apiClient"
import profilepic from '../../assets/rsz_profilep.jpg';
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Profile({ user, setAppState, appState, isLoading }) {

  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({})

  const [survey, setSurvey] = useState({})


  //const navigate = useNavigate()

useEffect(() => {
  const fetchInfo = async () => {
    const { data, error } = await apiClient.fetchUserSurvey(user)
    if (data) {
      setSurvey(data.survey[0])
    }
    if (error) {
      setErrors((e) => ({ ...e, error }))
    }
  }
  fetchInfo()
}, [appState.user]) 

const ThemeToggler = (props) => {
  const context = useContext(ThemeContext);
  const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
  const toggleTheme = context.toggleTheme;

  return (
    <button className={`button is-light rounded`} onClick={toggleTheme}>
      {btnText}
    </button>
  );
};

if (!user?.username) {
  return <NotAuthorized user={user} setAppState={setAppState}/>
} 




  return (
    <div className={`profile ${theme} `}>
    <div className={theme}>
    <ThemeToggler />
    <div className="Profile"> 
      <div>
        <div style={{ height:1400 ,   }}>
          <div style={{  display: "flex", alignItems: "flex-start" }}>
            <StickyBox offsetTop={20} offsetBottom={20} >
              <Sidebar className={`${theme2} `} />
            </StickyBox>
            <div> 
            <div className= "banner" id="surveyInfo">
            <section className={`container-banner ${theme2}`}>
            <div className="banner-intro">
              <div className="banner-blurb">
{/*               <img
              className="profilepic"
              src={profilepic}
              alt="profile_picture"
            ></img> */}
                <span id="name" align="left">{user.first_name + " " + user.last_name}</span>
                <span align="left" className="bio-heading">
                <div className="description"> About Me: <span align="left"> {survey.description} </span> </div>
                </span>
              </div>
              <div className="edit">
              <div className="profile-img">
                 <img src={survey.image}
               alt="profile_picture"></img>
               </div>
               
              </div>
            </div>
            <div class="panel-body bio-graph-info">
              <div class="row">
                  <div class="bio-row">
                  <div> Location: <span> {survey.location} </span> </div> 
                  </div>
                  <div class="bio-row">
                  <div> Diet: <span> {survey.diet} </span> </div>
                  </div>
                  <div class="bio-row">
                  <div> School: <span> {survey.schoolname} </span> </div> 
                  </div>
                  <div class="bio-row">
                  <div> Food Intolerances: <span>{survey.intolerances} </span> </div>
                  </div>
                  <div class="bio-row">
                  <div> Preferred Cuisines: <span>{survey.cuisines} </span></div>
                  </div>
              </div>
          </div>
         
          </section>
          <div className = "modalBtn">
                
                 <button className={`openModalBtn ${theme2}`} onClick={() => {
                   setOpenModal(true);
                 }}>   ✏️ Edit Profile </button>
                 {openModal && <EditProfile survey= {survey} setSurvey={setSurvey} setOpenModal= {setOpenModal} />}
          </div>
            </div>
                <br />
                <h6>Favorite Recipes</h6>
                <div className='HomeRecipes'>
                <HomeRecipeCalls className={`${theme2}`} />
                </div>
                </div>
            </div>
            
          </div>
        </div> 
</div>
</div>
        </div>
  );
}

/*
<div>
              <FontAwesomeIcon icon={faEdit} onClick={() => {
                setOpenModal(true);
              }} size="1.5x"/> <i class="fa fa-edit"></i> 
                 <button className='openModalbtn' data-toggle="modal" data-target="#ModalLong" onClick={() => {
                   setOpenModal(true);
                 }} > {isLoading ? <>Loading</> : <>Edit Profile</>} </button>
                 {openModal && <EditProfile survey= {survey} setSurvey={setSurvey} setOpenModal= {setOpenModal} />}
                </div>
*/

    