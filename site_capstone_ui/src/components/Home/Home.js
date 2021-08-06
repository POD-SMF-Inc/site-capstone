import './Home.css'
//import book from '../../assets/recipebook.jpg'
import home from '../../assets/Group10.png';
//import book from '../../assets/book.png'
import HomeRecipeCalls from '../HomeRecipeCalls/HomeRecipeCalls'
export default function Home() {
    return (
      <div className="Home">
       <div class="headerH">
       <div class="info">
         <span>
         <a  href="/">
              <img className="homelogo"
              src={home}
              alt="logo_picture" width="60" height="50"></img>
          </a>
          </span>
          <span >
              <b>Servings of Delight</b> is introducing an online cookbook for college students who do not have the time to come up with their own nutritious and diverse meals. Servings of Delight allows users to search for recipes within their diet restrictions, receive a detailed recipe, and use a generated meal plan.
            </span>
    
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

/**<div className="home-intro">
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
        
        </div> */


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