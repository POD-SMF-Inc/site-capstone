import './Profile.css'
import React, { useEffect, useState } from 'react';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
//import IntroductionP from '../IntroductionP/IntroductionP'
//import About from './About'
//import Header from './Header'
import Banner from './Banner'
//import Post from './Post'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
//import { ThemeContext } from "../../contexts/ThemeContext";



  
  
function Profile({ user, setUser, appState, survey }) {


  if (!user?.username) {
    return <NotAuthorized user={user} setUser={setUser}/>
} 




  return (
    <div className="Profile"> 

        <div style={{ height: 900, overflow: "auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Sidebar />
            </StickyBox>
            <div className="surveyInfo"> 
              <div className= "info">
                <div> Diet: <span> {survey?.diet} </span> </div>
                  <div> Intolerances: <span>{survey?.intolerances} </span> </div>
                  <div> Cuisines: <span>{survey?.cuisines} </span></div>
                  <div> Description: <span> {survey?.description} </span> </div>
                  <div> Location: <span> {survey?.location} </span> </div> 
                  <div> School: <span> {survey?.schoolName} </span> </div> 
                  </div>
                  </div>
              
      
                <Banner />
                <br />
                <h6>Favorite Recipes</h6>
                <div className="HomeRecipes">
                <HomeRecipeCalls />
                </div>
                <span></span>
                <span></span>
                <div></div>
            </div>
            
          </div>
        </div>
  );
            }

  
  export default Profile;
  
//<Banner /><br />
  //<About /><br />