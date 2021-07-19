import React, { useState } from "react";
import MealList from "./MealList";
import './Planner.css';

function Planner() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
  
    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=7abfa1a217ad4d16b972b6c7428d92b6&timeFrame=day&targetCalories=${calories}`
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
  
    return (
      <div className="Planner">
        <section className="controls">
          <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />
          <button className= 'getBtn'onClick={getMealData}>Get Daily Meal Plan</button>
        </section>
        {mealData && <MealList mealData={mealData} />}
      </div>
    );
  }
  
  export default Planner;