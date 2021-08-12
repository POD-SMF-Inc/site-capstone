import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import RecipeCard from "./RecipeCard";
import NewRecipeForm from "./NewRecipeForm";

const onDragOver = (evt) => {
    evt.preventDefault();
  };
  
  const DayArticle = ({ day, total }) => {
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.cardLight : context.cardDark;
    return (
      <article className={`box ${theme} all-rounded has-text-centered`}>
        <div className="is-size-6-tablet is-uppercase mx-1">{day} 
        <div className="tag is-rounded is-small is-primary is-outlined  mx-1">{total}</div>
        </div>
      </article>
    );
  };
  
  const RenderColumn = ({ day, recipes, removeRecipe, favRecipe }) => {
    // Show favorites at the top
    recipes.sort((a, b) => {
      return (a.isFav === b.isFav) ? 0 : a.isFav? -1 : 1;
    })
    return (
      <div className="tile is-parent is-vertical droppable">
        <DayArticle day={day} key={day} total={recipes.length} />
        {recipes.map(recipe => (
          <RecipeCard
            recipe={recipe}
            removeRecipe={removeRecipe}
            favRecipe={favRecipe}
            key={recipe.id}
          />
        ))}
      </div>
    );
  };
  
  function RecipeList() {
    const [recipes, setRecipes] = useState(() => {
      const localRecipes = localStorage.getItem('recipes');
      return localRecipes ? JSON.parse(localRecipes) : [];
    });
    const [days] = useState([
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]);
    const [isModalOpen, setModal] = useState(false)
  
    useEffect(() => {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);
  
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? "main-content" : "main-content-dark";
  
    const onDrop = (evt, day) => {

      let recipeId = evt.dataTransfer.getData("id");
      let recipesN = recipes.filter((recipe) => {
        if (recipe.id === parseInt(recipeId)) {
          recipe.day = day;
        }
        return recipe;
      });
      setRecipes([...recipesN]);
    };
  
    const addRecipe = (recipe) => {
      const id = recipes.length 
      setRecipes(prevState => ([...prevState, {...recipe, id}]));
    }
  
    const removeRecipe = (id) => {
      setRecipes(recipes.filter(recipe => recipe.id !== id))
    }
  
    const favRecipe = (id) => {
      setRecipes(recipes.filter(recipe => {
        if (recipe.id === id)
          recipe.isFav = !recipe.isFav;
        return recipe;
      }));
    }
  
    return (
      <div className="container is-fluid">
        <NewRecipeForm
          isModalOpen={isModalOpen}
          setModal={setModal}
          days={days}
          addRecipe={addRecipe}
        />
        <div className={`tile is-ancestor mt-3 ${theme}`}>
        
          {days.map(day => {
            const dayRecipes = recipes.filter(recipe => recipe.day === day);
            return (
              <div
                onDragOver={e => onDragOver(e)}
                onDrop={e => onDrop(e, day)}
                key={day}
                className="flipped"
              >
                <RenderColumn
                  day={day}
                  recipes={dayRecipes}
                  removeRecipe={removeRecipe}
                  favRecipe={favRecipe}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setModal(!isModalOpen)}
          className="button  is-normal floating"
        >
          Add Recipe
        </button>
      </div>
    );
    
  }
  
  export default RecipeList;

  