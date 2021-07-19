import './Profile.css'
import React from 'react';
import SidebarP from '../SidebarP/SidebarP'
import IntroductionP from '../IntroductionP/IntroductionP'
import About from './About'

function Profile() {
    return (
        <div id="colorlib-page">
        <div id="container-wrap">
         	
            <SidebarP></SidebarP>
				<div id="colorlib-main">
                <IntroductionP></IntroductionP>
					
          	</div>
              <About />
                <br />
      	</div>
      </div>
     );

}
  
export default Profile;