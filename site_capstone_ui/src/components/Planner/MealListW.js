import React from "react";
import MealW from "./MealW";

export default function MealListW({ mealDataW }) {
  const week = mealDataW.week;

  return (
    <main>
      
        <div className="weekMeals">
          
          <section className="monday">
            <div className="dayMacro">
            <h1>Monday</h1>
              <ul>
                <li>Calories: {week.monday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.monday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.monday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.monday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.monday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
          </section>
          

          
          <section className="tuesday">

            <div className="dayMacro">
            <h1>Tuesday</h1>
              <ul>
                <li>Calories: {week.tuesday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.tuesday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.tuesday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.tuesday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.tuesday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
          </section>
          
          <section className="wednesday">
            
            <div className="dayMacro">
            <h1>Wednesday</h1>
              <ul>
                <li>Calories: {week.monday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.monday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.monday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.monday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.wednesday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
          </section>
         
          <section className="thursday">
            
            <div className="dayMacro">
            <h1>Thursday</h1>
              <ul>
                <li>Calories: {week.thursday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.thursday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.thursday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.thursday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.thursday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
          </section>
         
          <section className="friday">
           
            <div className="dayMacro">
            <h1>Friday</h1>
              <ul>
                <li>Calories: {week.friday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.friday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.friday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.friday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.friday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
          </section>
          

          <section className="saturday">
           
            <div className="dayMacro">
            <h1>Saturday</h1>
              <ul>
                <li>Calories: {week.saturday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.saturday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.saturday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.saturday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.saturday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
          </section>

          <section className="sunday">
            
            <div className="dayMacro">
            <h1>Sunday</h1>
              <ul>
                <li>Calories: {week.sunday.nutrients.calories.toFixed(0)}</li>
                <li>
                  Carbohydrates:{" "}
                  {week.sunday.nutrients.carbohydrates.toFixed(0)}
                </li>
                <li>Fat: {week.sunday.nutrients.fat.toFixed(0)}</li>
                <li>Protein: {week.sunday.nutrients.protein.toFixed(0)}</li>
              </ul>
            </div>
            {mealDataW.week.sunday.meals.map((meal) => {
              return <MealW key={meal.id} meal={meal} />;
            })}
        </section>
        </div>
    </main>
  );
}