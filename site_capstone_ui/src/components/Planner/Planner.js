import React, { useState } from "react";
import MealList from "./MealList";
import './Planner.css';
import NotAuthorized from "../NotAuthorized/NotAuthorized"



function Planner() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

function Planner( {user, setUser} ) {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    if (!user?.email) {
      return <NotAuthorized user={user} setUser={setUser}/>
  }

  
    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=1a23b0a94a2a4db3ac2faaa6703f448e&timeFrame=day&targetCalories=${calories}`
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