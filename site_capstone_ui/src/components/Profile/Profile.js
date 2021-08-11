import './Profile.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
import ProfileFavs from '../ProfileFavs/ProfileFavs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
//import IntroductionP from '../IntroductionP/IntroductionP'
//import About from './About'
//import Header from './Header'
//import Post from './Post'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import EditProfile from "../EditProfile/EditProfile"
import apiClient from "../../services/apiClient"
import profilepic from '../../assets/rsz_profilep.jpg';

export default function Profile({ user, setAppState, appState, isLoading, setUser }) {


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


if (!user?.username) {
  return <NotAuthorized user={user} setAppState={setAppState}/>
} 




  return (

    <div className="Profile"> 
      <div>
        <div style={{ height: 900,  overflow: "auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Sidebar />
            </StickyBox>
            <div> 
            <div className= "banner" id="surveyInfo">
            <section className="container-banner">
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
                 <img src={profilepic}
               alt="profile_picture"></img>
               </div>
              <FontAwesomeIcon icon={faEdit} onClick={() => {
                setOpenModal(true);
              }} size="1.5x"/> <i class="fa fa-edit"></i> 
                 <button className='openModalbtn' data-toggle="modal" data-target="#ModalLong" onClick={() => {
                   setOpenModal(true);
                 }} > {isLoading ? <>Loading</> : <>Edit Profile</>} </button>
                 {openModal && <EditProfile user={user} setErrors={setErrors} setUser={setUser} survey= {survey} setSurvey={setSurvey} setOpenModal= {setOpenModal} />}
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
                
                 <button className='openModalBtn' onClick={() => {
                   setOpenModal(true);
                 }}>   ✏️ Edit Profile </button>
                 {openModal && <EditProfile survey= {survey} setSurvey={setSurvey} setOpenModal= {setOpenModal} />}
          </div>
            </div>
                <br />
                <h6>Favorite Recipes</h6>
                <div className="ProfileRecipes">
                {/* <HomeRecipeCalls /> */}
                <ProfileFavs />
                <Link to='/favorites'><button className="favProBtn">Show More</button></Link>
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

    