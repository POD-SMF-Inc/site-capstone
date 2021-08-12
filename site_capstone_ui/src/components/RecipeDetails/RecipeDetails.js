import "./RecipeDetails.css"
import { useState, useEffect, useContext } from "react";
import React from 'react'
import Collapsible from "../Collapsible/Collapsible";
import apiClient from "../../services/apiClient"
import ModalShopping from "../ModalShopping/ModalShopping";

import CollapseSteps from "../CollapseSteps/CollapseSteps";
import timer from "../../assets/timer.png"
import dollarSign from "../../assets/dollar-sign-in-green-circle.jpg"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function RecipeDetails({ recipe, equipment, visible, setVisible }) {
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
    const [modalOpen, setModalOpen] = useState(false)
    
    const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      
    const priceFormat = (amount) => {
        return `$${formatter.format(amount)}`
      }
    
    const recipeInfo = {
        food_id: recipe.id,
        title: recipe.title,
        picture: recipe.image
    }
    const handleOnAdd = async () => {
        const { data, error } = await apiClient.addToFav({ recipeInfo})
        setVisible(false)
    }
    const handleOnRemove = async () => {
        const { data, error } = await apiClient.removeFromFav({ recipeInfo})
        setVisible(true)
    }
    const imageUrl = "https://spoonacular.com/cdn/ingredients_100x100/"
    const equipUrl = "https://spoonacular.com/cdn/equipment_100x100/"
    
    return (
        <div className={`RecipeDetail ${theme}`}>
            <div className="sideByA">
                <div className="aboutRec">
                        <div className="practiceInfo">
                            
                                <div className={`recipeDTitle`}>
                                    <h1 className={`${theme2}`}>{recipe?.title}</h1>
                                </div>
                                <div className="recipeDImage">
                                    <img src={recipe?.image} alt="recipe dish"></img>
                                </div>
                        
                        </div>
                </div>
                <div className={`nutritionInfo ${theme2}`}>
                <div className="favButton">
                    {visible? <button onClick={handleOnAdd}>Add To Favorites</button> : <button onClick={handleOnRemove}>Remove From Favorites</button>}
                    </div>
                    <div className="nutriTitle">
                        <h1>Information</h1>
                    </div>
                    <div className="servingTitle">
                        <h1>Servings</h1>
                        <p>{recipe.servings}</p>
                    </div>

                    {recipe.cuisines?.length > 0 && <div className="cuisineArr">
                        <h1>Cuisines</h1> {
                        <p>{recipe.cuisines.join(", ")}</p>
                    }</div>}
                    {recipe.dishTypes?.length > 0 && <div className="typeArr">
                        
                        <h1>Dish Types</h1>
    
                    {
                        <p>{recipe.dishTypes.join(", ")}</p>
                    }</div>}
                    {recipe.diets?.length > 0 && <div className="dietsArr">
                        <h1>Diets</h1>{
                        <p>{recipe.diets.join(", ")}</p>
                    }</div>}
                </div>
                
            </div>
            <div className={`priceInfo ${theme2}`}>
                <div className="pricePic">
                    <img src={timer} alt="timer" />
                    <p>Ready In {recipe?.readyInMinutes} Minutes</p>
                </div>
                <div className="priceText">
                    <img src={dollarSign} alt="dollar sign" />
                    
                    <p>Price Per Serving: {priceFormat(recipe?.pricePerServing/100)}</p>
                </div>
            </div>
            <div className={`summarydetails ${theme2}`} dangerouslySetInnerHTML={{__html:recipe?.summary}}></div>
            <div className={`sideByequip `}>
                
                <div className={`infoMeal ${theme2}`}>
                    
                    <div className={`ingTitleN ${theme2}`}>
                        <h1 >Ingredients</h1>
                        
                    </div>
                    
                        {recipe.extendedIngredients?.map(item => (
                            <>

                                <div className={`sepIng ${theme2}`}>
                                    

                                    <li>{item.measures.us.amount + " " + item.measures.us.unitLong}{" " + item.originalName}</li>
                                </div>
                            </>
                        ))}
                    <div className="footerIng">
                        <h2>Have All Your Ingredients? If Not Click Here To</h2>
                        <ModalShopping modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                        <button
                            onClick={() => setModalOpen(!modalOpen)}
                            className="btnIng"
                            >
                            Create A Shopping List
                        </button>
                    </div>
                </div>
               
                


                {equipment?.equipment?.length === 0 ? null : <div className={`equipmentMeal ${theme2}`}>
                    <div className="equipTitle">
                        {equipment?.equipment?.length === 0 ? null : <h1>Equipment</h1>}
                        </div>
                        <div className="eqiupS">
                        {
                            equipment?.equipment?.map(item => (
                                <>
                                    <div className="sepEquip">
                                        
                                        <img src={equipUrl + item.image} alt="equipment used in dish"></img>
                                        <p>{item.name}</p>
                                    </div>
                                </>
                            ))
                        }
                        </div>
                    
                </div>}
            </div>
            {recipe?.analyzedInstructions === undefined || recipe?.analyzedInstructions === null || recipe?.analyzedInstructions.length === 0 ?  <h1>Recipe Instructions Coming Soon!</h1> : (
                    <div className={`steps ${theme}`}>
                    <h1>Directions</h1>
                    <Collapsible label="Recipe Steps">
                    {
                            recipe?.analyzedInstructions === undefined || recipe?.analyzedInstructions === null || recipe?.analyzedInstructions.length === 0 ?  null : recipe?.analyzedInstructions[0].steps?.map(element => (
                                <>
                                <CollapseSteps label={`Step ${element.number} `}>
                                    <p>Step {element.number}: {element.step}</p>
                                    {element.ingredients.length === 0 ? null : <div className={`ingred ${theme2}`}>Ingredients:
                                                {
                                                    
                                        element.ingredients.map((item) => (
                                            <>
                                            
                                            <li>{item.name}</li>
                                            </>
                                            ) )
                                            }
                                    </div> }
                                    </CollapseSteps>
                                </>
                            ))
                            }
                    </Collapsible>

                    </div>)              
            }
            
            
            
        </div>
    )
        
}
