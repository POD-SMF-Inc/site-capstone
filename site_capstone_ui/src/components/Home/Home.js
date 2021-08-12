import './Home.css'
import React, {  useContext } from "react";
//import book from '../../assets/recipebook.jpg'
import home from '../../assets/Group10.png';
//import book from '../../assets/book.png'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Home({ user }) {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;

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


    return (
      <div className={`homep${theme} `}>
      <div className={theme}>
      <div className= {`Home ${theme}` }>
       <div class="headerH">
  
       <div class="info">
       <ThemeToggler className="themeBtn"/>
         <span>
         <a  href="/">
              <img className="homelogo"
              src={home}
              alt="logo_picture" width="60" height="50"></img>
          </a>
          </span>
          <span className="homeDes">
              <b>Servings of Delight</b> is introducing an online cookbook for college students who do not have the time to come up with their own nutritious and diverse meals. Servings of Delight allows users to search for recipes within their diet restrictions, receive a detailed recipe, and use a generated meal plan.
            </span>
    
        </div>
        </div>
        <div className={`home-layout ${theme} `}>
          <h1 id="home-title">Recipes</h1>
          <div className="HomeRecipes">
            <HomeRecipeCalls />
          </div>
         { user === undefined? <h1 id="footer"> Create an account to view more recipes! </h1> : null}
        </div>
      </div>
      </div>
      </div>
      
    );
    }