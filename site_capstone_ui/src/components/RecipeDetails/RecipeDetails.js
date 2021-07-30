import "./RecipeDetails.css"
import { useState, useEffect } from "react";
import React from 'react'
import Collapsible from "../Collapsible/Collapsible";
import apiClient from "../../services/apiClient"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RemoveFav from "../RemoveFav/RemoveFav";
import AddToFav from "../AddToFav/AddToFav";
export default function RecipeDetails({ recipe }) 
{
    const [visible, setVisible] = useState(false)
    const [showRemove, setShowRemove] = useState(false)
    const [serving, setServing ] = useState(1)
    
    const buttonSec = document.querySelector("#favButton")
    // const recipeInfo = {
    //     food_id: recipe.id,
    //     title: recipe.title
    // }
    const recipeInfo = {
        food_id: recipe.id,
        title: recipe.title
    }
    //let fave = true;
    /*function AddToFav ({ recipeInfo })
    {
        console.log("recipe in addFav: ", recipeInfo )
        const handleOnSubmit = async () => {
            const { data, error } = await apiClient.addToFav({ recipeInfo})
            //let fave = true;

            console.log("data in add Fav: ", data)
        }
        return (
            <div className="AddToFav">
                <button onClick={handleOnSubmit}>Add To Favorites</button>
            </div>
        )
    }

    function RemoveFav ({ recipeInfo })
{
    console.log("recipe in deleteFav: ", recipeInfo )
    const handleOnSubmit = async () => {
        const { data, error } = await apiClient.removeFromFav({ recipeInfo})
        //fave = false;
        console.log("data in delete Fav: ", data)
    }
    return (
        <div className="RemoveFav">
            <button onClick={handleOnSubmit}>Remove From Favorites</button>
        </div>
    )
}
*/

    useEffect(() => {
        const fetchRecipeId = async () => {
            try {
                const { data, error } = await apiClient.checkFav(recipe?.id)
                //const { data, error } = await apiClient.getFavs()
                console.log("recipeid: ", recipe?.id)
                if (data)
                {
                    //If false then its not in favorites
                    console.log("data: ", data)
                    if (data.favorites)
                    {
                        //Choosing to see Favorites Button
                        //setVisible(true)
                        
                        //buttonSec.innerHTML = `<AddToFav recipeInfo={recipeInfo} />`
                        console.log("it is in the fav, " , data.favorites)

                    }
                    else
                    {
                        
                        console.log("not in fav", data.favorites)
                        //buttonSec.innerHTML = ``
                        // return (
                        //     <RemoveFav recipeInfo={recipeInfo} />
                        // )
                        //buttonSec.innerHTML = `<button>Remove From Favorites</button>`
                    }
                    
                }
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchRecipeId()
    }, [recipe?.id])
    //let fave = false;
    const handleOnSubmit = async () => {
        //fave=true; 
        const { data, error } = await apiClient.addToFav({ recipeInfo})
        setVisible(true);
        /*if (data)
        {
            buttonSec.innerHTML = `<button onClick=${handleRemove}>Remove From Favorites</button>`
        }*/
    }

    const handleRemove = async () => {
       // fave= false;
        const { data, error } = await apiClient.removeFromFav({ recipeInfo })
        setVisible(true);
        /*if (data)
        {
            buttonSec.innerHTML = `<button onClick=${handleOnSubmit}>Add To Favorites</button>`
        }*/
    }
    // state = {
    //     isExpanded: this.props.isExpandedInitially,
    // };

    // const {isExpanded} = this.state;
    const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      
    const priceFormat = (amount) => {
        return `$${formatter.format(amount)}`
      }
    
    console.log("Recipe detail: ", recipe)
    console.log("dish: ", recipe.dishTypes?.join(", "))
    const imageUrl = "https://spoonacular.com/cdn/ingredients_100x100/"
    const equipUrl = "https://spoonacular.com/cdn/equipment_100x100/"
    
    /*
    useEffect(() => {
        const infoSec = document.querySelector("#info")
        const summaryInfo = recipe.summary
        infoSec.innerHTML = summaryInfo
    }, [recipe.summary])
    */
    //console.log("recipe: ", recipe.analyzedInstructions[0])

    // console.log("recipe cusine: ", recipe.cuisines)
    // if (recipe.cuisines.length === 0)
    // {
    //     console.log("sure")
    // }
    // else
    // {
    //     console.log("nah")
    // }
    //console.log("html: ", buttonSec)
    return (
        
        <div className="RecipeDetail">
            <div className="sideByA">
                <div className="aboutRec">
                        <div className="practiceInfo">
                            
                                <div className="recipeDTitle">
                                    <h1>{recipe.title}</h1>
                                </div>
                                <div className="recipeDImage">
                                    <img src={recipe.image} alt="Meal"></img>
                                </div>
                        
                        </div>
                </div>
                <div className="nutritionInfo">
                     {/*visible? (<button onClick={handleOnSubmit}><AddToFav recipeInfo={recipeInfo} /> </button> ) 
                     :(<button onClick={ handleRemove}><RemoveFav recipeInfo={recipeInfo} /></button>) */}
                    {/*showRemove?<button>Remove From Favorites</button> : null*/} 
                   {/*<AddToFav recipeInfo={recipeInfo} /> 
                /<RemoveFav recipeInfo={recipeInfo} /> */}
                    <i onClick={handleOnSubmit}> <AddToFav recipeInfo={recipeInfo} /></i>
                    <div id="favButton"></div>
                    <div className="nutriTitle">
                        <h1>Information</h1>
                    </div>
                    <div className="servingTitle">
                        <h1>Servings</h1>
                        <p>{recipe.servings}</p>
                    </div>

                    {recipe.cuisines?.length > 0 && <div className="cuisineArr">
                        <h1>Cuisines</h1> {
                    // recipe.cuisines.map(ele => (
                    //     <>
                    //         <p>{ele}</p>
                    //     </>
                    // ))
                        <p>{recipe.cuisines.join(", ")}</p>
                    }</div>}
                    {recipe.dishTypes?.length > 0 && <div className="typeArr">
                        
                        <h1>Dish Types</h1>
    
                    {
                        // recipe.dishTypes.map(ele => (
                        //     <>
                        //         <p>{ele}</p>
                        //     </>
                        // ))
                        <p>{recipe.dishTypes.join(", ")}</p>
                    }</div>}
                    {recipe.diets?.length > 0 && <div className="dietsArr">
                        <h1>Diets</h1>{
                        // recipe.diets.map(ele => (
                        //     <>
                        //         <p>{ele}</p>
                        //     </>
                        // ))
                        <p>{recipe.diets.join(", ")}</p>
                    }</div>}
                    
                    {/* fave ?
                     (<AddToFav recipeInfo={recipeInfo} />
                ): (
                <RemoveFav recipeInfo={recipeInfo} /> 
                    )
                */}
                    
                </div>
                
            </div>
            <div className="priceInfo">
                <div className="pricePic">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/46670/stopwatch-emoji-clipart-xl.png" alt="timer" />
                    <p>Ready In {recipe.readyInMinutes} Minutes</p>
                </div>
                <div className="priceText">
                    <img src="https://clipart.world/wp-content/uploads/2020/06/dollar-sign-in-green-circle.jpg" alt="dollar sign" />
                    
                    <p>Price Per Serving: {priceFormat(recipe.pricePerServing/100)}</p>
                </div>
            </div>
            <div className="summarydetails" dangerouslySetInnerHTML={{__html:recipe.summary}}></div>
            <div className="infoMeal">
                
                <div className="ingTitleN">
                    <h1>Ingredients</h1>
                </div>
                
                {/* <Collapsible label="Ingredients"> */}
                    {recipe.extendedIngredients?.map(item => (
                        <>
                            <div className="sepIng">
                                {/* <input type="checkbox" /><span><img src={imageUrl + item.image} alt="ingredient in dish"></img> <br/>{item.measures.us.amount + " " + item.measures.us.unitLong}{" " + item.originalName}</span> */}
                                <input type="checkbox" /><span>{item.measures.us.amount + " " + item.measures.us.unitLong}{" " + item.originalName}</span>
                                 {/* <p>{item.originalName}</p> */}
                                 
                                {/* <p>Measures: </p>
                                <p>US: </p>
                                <p>Metric: {item.measures.metric.amount + " " + item.measures.metric.unitLong}</p>  */}
                            </div>
                        </>
                    ))}
                {/* </Collapsible> */}
            </div>
            
            <h1>Directions</h1>
            
            <div className="steps">
                <Collapsible label="Recipe Steps">
                {
                        recipe?.analyzedInstructions === undefined || recipe?.analyzedInstructions === null || recipe?.analyzedInstructions.length === 0 ?  null : recipe?.analyzedInstructions[0].steps?.map(element => (
                            <>
                            <Collapsible label={`Step ${element.number}: `}>
                                <p>Step {element.number}: {element.step}</p>
                                {element.ingredients.length === 0 ? null : <div className="ingred">Ingredients: 
                                    { 
                                    element.ingredients.map((item) => (
                                        <>
                                        <p>{item.name}</p>
                                        {
                                        item.image === "" ? null : <div className="directIng">
                                            <img src={imageUrl + item.image} alt="ingredient in dish"></img>
                                        </div>
                                            }
                                        
                                
                                        </>
                                ) )}</div> }
                                {element.equipment.length === 0 ? null : <div className="equipment">Equipment: 
                                    { 
                                    element.equipment.map((item) => (
                                    <>
                                    <p>{item.name}</p>
                                    
                                    <img src={equipUrl + item.image} alt="equipment used in dish"></img>
                                        </>
                                ) )}</div> }
                                </Collapsible>
                            </>
                        ))
                        }
                </Collapsible>
            
            </div>
        </div>
    )
        
}
