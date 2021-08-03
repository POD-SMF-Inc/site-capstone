import React, { useState } from "react";
import MealList from "./MealList";
import MealListW from "./MealListW";
import './Planner.css';
import NotAuthorized from "../NotAuthorized/NotAuthorized"



function Planner( {user, setUser} ) {
    const [mealData, setMealData] = useState(null);
    const [mealDataW, setMealDataW] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [caloriesW, setCaloriesW] = useState(2000);

    if (!user?.email) {
      return <NotAuthorized user={user} setUser={setUser}/>
  }

  
    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=e892ed26f6334d0d97339898d12fd2a9&timeFrame=day&targetCalories=${calories}`
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
        `https://api.spoonacular.com/mealplanner/generate?apiKey=4f70ca8c817d4e38b606fe534e185095&timeFrame=week&targetCalories=${caloriesW}`
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
        <section className="controls">
          <input
             type="number"
             placeholder="Calories (e.g. 2000)"
             onChange={handleChangeW}
           />
          <button className= 'getBtn'onClick={getMealDataW}>Get weekly Meal Plan</button>
        </section>
        {mealDataW && <MealListW mealDataW={mealDataW} />}
      </div>
    );
  }
  
  export default Planner; 