import './Profile.css'
import React from 'react';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
//import IntroductionP from '../IntroductionP/IntroductionP'
import About from './About'
//import Header from './Header'
import Banner from './Banner'

function Profile() {
    return (
      <div className="Profile">
        <div style={{height: 900, overflow: "auto"}}>
            <div style={{display: "flex", alignItems: "flex-start"}}>
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar />
                </StickyBox>
                <div >
                    <Banner /> 
                    <br />
                    <About />
                    <br />
                </div>
            </div>
        </div>
       </div>
    );
  }
  
  export default Profile;
  