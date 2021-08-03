import './Home.css'
import book from '../../assets/recipebook.jpg'
//import book from '../../assets/book.png'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
export default function Home() {
    return (
      <div className="Home">
        <div className="home-intro">
          <div className="intro-blurb">
            <span align="left">Servings of Delight</span>
            <span align="left">
              Servings of Delight is introducing healthy and affordable meal
              recipes to college students.
            </span>
          </div>
          <div className='intro-img'>
            <img src={book} alt='recipe book'></img>
            </div>
          


        </div>
        <div className="home-layout">
          <h1>Recipes</h1>
          <div className="HomeRecipes">
            <HomeRecipeCalls />
          </div>
          <h1 id="footer"> Create an account to view more recipes! </h1>
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
    </article> 
    
     <div className='intro-img'>
            <img src={book} alt='recipe book'></img>
            </div>
    
    
    
    */