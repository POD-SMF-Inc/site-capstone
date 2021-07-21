import "./HomeRL.css"
export default function HomeRL({ element })
{
    console.log("Element Home: ", element)
    const FavouriteComponent = element.favouriteComponent;
    return (
      /* <articleH>
            <h1>{element.title}</h1>
            <img src={element.image} alt="Smoothie"></img>
            <a href={element.sourceUrl}>Go to Recipe</a>
        </articleH>
        */
      <div className="SeperateRecipe">
        <h2>{element.title}</h2>
        <img src={element.image} alt="food_img"></img>
        <ul className="instructions">
          <li>Preparation time: {element.readyInMinutes} minutes</li>
          <li>Number of servings: {element.servings}</li>
        </ul>
        <a href={element.sourceUrl}>Go to Recipe</a>
        <div
          onClick={() => element.handleFavouritesClick(element)}
          className="overlay d-flex align-items-center justify-content-center"
        >
          <FavouriteComponent />
        </div>
      </div>
    );
}

/*
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article> */

    /*<div className="SeperateRecipe">
            <div className="RecipeTitle">
                <h1>{element.title}</h1>
            </div>
            <div className="Picture">
                <img src={element.image} alt="Smoothie"></img>
            </div>
        </div> */