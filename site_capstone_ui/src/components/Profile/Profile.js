import './Profile.css'
import React, { useEffect, useState, useContext } from 'react';
import StickyBox from "react-sticky-box";
import Sidebar from './Sidebar'
import ProfileFavs from '../ProfileFavs/ProfileFavs';
import { Link } from 'react-router-dom'

import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import EditProfile from "../EditProfile/EditProfile"
import apiClient from "../../services/apiClient";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Profile({ user, setAppState, appState, isLoading, setUser }) {

  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({})
  const [isFetching, setIsFetching] = useState(true)
  const [survey, setSurvey] = useState({})

useEffect(() => {
  const fetchInfo = async () => {
    const { data, error } = await apiClient.fetchUserSurvey(user)
    if (data) {
      setSurvey(data.survey[0])
    }
    if (error) {
      setErrors((e) => ({ ...e, error }))
    }

    setIsFetching(false)
  }
  //fetchInfo()
  setTimeout(fetchInfo, 500)
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


const renderProfile = () => {
  if (!user?.username) {
    return <NotAuthorized user={user} setAppState={setAppState}/>
} 

if (isFetching)
         {
             return (
                 <div className="Loading">
                 <Loader 
                 type="Circles" 
                 color="#00BFFF" 
                 height={80} 
                 width={80}
                 timeout={3000} //3 secs
                 />
                 </div>

             );
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
                      <span id="name" align="left">{user.first_name + " " + user.last_name}</span>
                      <span align="left" className="bio-heading">
                      <div className="description"> About Me: <span align="left"> {survey.description} </span> </div>
                      </span>
                    </div>
                    <div className="edit">
      {              <div className="profile-img"> 
                       <img src={survey.image}
                     alt="No Profile Photo Available" id="noimage"></img>
                     </div> }
                    </div>
                  </div>
                  <div class="panel-body bio-graph-info">
                    <div className={`row  ${theme2}`} >
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
                      
                       <button id= "editbutton" className={`openModalBtn ${theme2}`} onClick={() => {
                         setOpenModal(true);
                       }}>   ✏️ Edit Profile </button>
                       {openModal && <EditProfile survey= {survey} setSurvey={setSurvey} setOpenModal= {setOpenModal} />}
                </div>
                  </div>
                      <br />
                      <h6 id="fav">Favorite Recipes</h6>
                      <div className="ProfileRecipes">
                      {/* <HomeRecipeCalls /> */}
                      <ProfileFavs />
                      <Link to='/favorites'><button  className={`favProBtn ${theme2}`}>Show More</button></Link>
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

return(
  <div className="mainprofile">
    {renderProfile()} 
    </div>
)

}

    