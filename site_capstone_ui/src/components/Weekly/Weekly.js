import RecipeList from "./RecipeList";
import React, { useContext } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import './Weekly.css'
//import 'bulma/css/bulma.css';


function Weekly() {
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
  
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
      
        <div className={`${theme} `}>
          <div className={theme}>
          <ThemeToggler />
          <div className='weekly-blurb'>
              <span align= 'center'>Weekly Calendar</span>
              <span align= 'center'>Create your own weekly recipes from scratch. You can move your recipes around to any day you desire and add as many as you need. 
              </span>
            </div>
                <RecipeList />
              
            
            
          </div>
          <div className="column">
          
        </div>
        </div>
      
    );
  }
  
  export default Weekly;
