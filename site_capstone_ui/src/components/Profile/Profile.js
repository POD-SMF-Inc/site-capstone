import './Profile.css'
import React from 'react';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
//import IntroductionP from '../IntroductionP/IntroductionP'
//import About from './About'
//import Header from './Header'
import Banner from './Banner'

//import Post from './Post'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'

import NotAuthorized from "../NotAuthorized/NotAuthorized"


function Profile( { user, setUser } ) {

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
            <div>
        
                <Banner />
                <br />
                <h6>Favorite Recipes</h6>
                <div className="HomeRecipes">
                <HomeRecipeCalls />
                </div>

            </div>
            
              
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  
//<Banner /><br />
  //<About /><br />