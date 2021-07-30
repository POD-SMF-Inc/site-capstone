import './Profile.css'
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons';
//import IntroductionP from '../IntroductionP/IntroductionP'
//import About from './About'
//import Header from './Header'
//import Post from './Post'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import EditProfile from "../EditProfile/EditProfile"
import Survey from "../Survey/Survey"




export default function Profile({ user, setUser, appState, survey, setSurvey, isLoading  }) {

  console.log("survey:",survey)


  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate()
  //const [editMode, setEditMode] = useState(false)

  /* const changeToFalse = () => {
    setEditMode(false)
  }
 */


  if (!user?.username) {
    return <NotAuthorized user={user} setUser={setUser}/>
} 



  return (
    <div className="Profile"> 
      <div>
        <div style={{ height: 900, overflow: "auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Sidebar />
            </StickyBox>
            <div> 
            <div className= "banner" id="surveyInfo">
            <section className="container-banner">
            <div className="banner-intro">
              <div className="banner-blurb">
                <span id="name" align="left">John Doe</span>
                <span align="left" className="bio-heading">
                <div className="description"> About Me: <span> {survey.description} </span> </div>
                </span>
              </div>
              <div className="edit">
              <FontAwesomeIcon icon={faEdit} onClick={() => {
                setOpenModal(true);
              }} size="1.5x"/> <i class="fa fa-edit"></i> 
                 <button className='openModalbtn' onClick={() => {
                   setOpenModal(true);
                 }} > {isLoading ? <>Loading</> : <>Edit Profile</>} </button>
                 {openModal && <EditProfile survey= {survey} setSurvey={setSurvey} setOpenModal= {setOpenModal} />}
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
                  <div> School: <span> {survey.schoolName} </span> </div> 
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
            </div>
                <br />
                <h6>Favorite Recipes</h6>
                <div className="HomeRecipes">
                <HomeRecipeCalls />
                </div>
                </div>

            </div>
            
          </div>
        </div> 
</div>
  );
            }
