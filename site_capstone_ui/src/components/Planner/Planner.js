import React, { useState, useEffect, useContext } from "react";
import MealList from "./MealList";
import MealListW from "./MealListW";
import './Planner.css';
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../contexts/ThemeContext";

function Planner( { user, setAppState } ) {
    const [mealData, setMealData] = useState(null);
    const [mealDataW, setMealDataW] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [caloriesW, setCaloriesW] = useState(2000);
    const key = 'e892ed26f6334d0d97339898d12fd2a9';
    const [showButton, setShowButton] = useState(false);
   
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

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
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    if (!user?.email) {
      return <NotAuthorized user={user} setAppState={setAppState}/>
  }
  
  

  
  
    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${key}&timeFrame=day&targetCalories=${calories}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMealData(data);
        })
        .catch(() => {
          console.log("error");
        });
    }
  
    function handleChange(e) {
      setCalories(e.target.value);
    }
  
    function getMealDataW() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${key}&timeFrame=week&targetCalories=${caloriesW}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMealDataW(data);
        })
        .catch(() => {
          console.log("error");
        });
    }
  
    function handleChangeW(e) {
      setCaloriesW(e.target.value);
    }

    
    
    

    return (
      <div className={`planner ${theme} `}>
      <div className={theme}>
      <ThemeToggler />
      <div className="Planner">
        <div className='mealp-blurb '>
              <span id="titlemeal" align= 'center'>Meal Plans</span>
              <span align= 'center'> Use our Meal Plan Generator to get diet plans for weight loss, weight gain, or simply for new meal ideas. Input your target calorie intake into the Daily Meal Plan generator or try out the Weekly Meal Plan generator.
              </span>
            </div>
           
        <section className={`controls box ${theme2}` }> 
        <FontAwesomeIcon icon={faCalendarDay} size="3x" />
          <input
          className="input"
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />

          <button className= 'getBtn'onClick={getMealData}>Get Daily Plan</button>
      
        </section>
        {mealData && <MealList mealData={mealData} />}
       
        
        <section className={`controls box ${theme2}` }>
        <FontAwesomeIcon icon={faCalendarWeek} size="3x" />
          <input
            className="input is-outlined"
             type="number"
             placeholder="Calories (e.g. 2000)"
             onChange={handleChangeW}
           />
          <button className= 'getBtn'onClick={getMealDataW}>Get Weekly Plan</button>
        </section>
        {mealDataW && <MealListW mealDataW={mealDataW} />}

        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      </div>
      </div>
      </div>
    );
  }
  
  export default Planner; 