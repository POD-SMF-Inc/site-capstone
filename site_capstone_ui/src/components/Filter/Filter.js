import "./Filter.css"
import { useState, useContext } from "react"
import Search from "../Search/Search"
import CollapseFilter from "../CollapseFilter/CollapseFilter"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import StickyBox from "react-sticky-box";
import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Filter( { user, setAppState } ) {
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  
    const ThemeToggler = (props) => {
        const context = useContext(ThemeContext);
        const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
        const toggleTheme = context.toggleTheme;
      
        return (
          <button className={`button is-light rounded`} onClick={toggleTheme}>
            {btnText}
          </button>
        );
      };
    
    const [query, setQuery] = useState("")
    let cuisine = []
    let intolerances = []
    
    const [dietS, setDietS] = useState("")
    const [typeS, setTypeS] = useState("")
    const [check, setCheck] = useState({})
    const [intol, setIntol] = useState({})

    if (!user?.username) {
        return <NotAuthorized user={user} setAppState={setAppState}/>
    } 

    const handleCheck = (event) => {
        setCheck((f) => ({ ...f, [event.target.name]: event.target.checked }))
    }

    const handleCheck2 = (event) => {
        setIntol((f) => ({ ...f, [event.target.name]: event.target.checked }))
    }

    function objectArr(object, arrayL)
    {
        Object.entries(object).forEach(element => {
            if (element[1] === true)
            {
                arrayL.push(element[0])
            }
        })
        
    }

    objectArr(check, cuisine)
    objectArr(intol, intolerances)
    
    return (
        <div className={`filterp ${theme} `}>
        <div className={theme}>
        <ThemeToggler />
        <StickyBox  offsetBottom={20}>
        <div className={`searchSec ${theme}`}>
            <div className={`filter  ${theme2} `}>
                <div className={`title ${theme2}`}>
                    <h1>Filter By</h1>
                </div>
                    
                <div className="dropDown">
                    <div className="dietAll">
                        <div className="dietTitle">
                            <h1>Diet</h1>
                        </div>
                        <div className="dietDrop">
                            <select onChange={(e) => setDietS(e.target.value)}>
                                <option>Select</option>
                                <option>Gluten Free</option>
                                <option>Gluten</option>
                                <option>Ketogenic</option>
                                <option>Vegetarian</option>
                                <option>Lacto-Vegetarian</option>
                                <option>Ovo-Vegetarian</option>
                                <option>Vegan</option>
                                <option>Pescetarian</option>
                                <option>Paleo</option>
                                <option>Primal</option>
                                <option>Whole30</option>
                            </select>
                        </div>
                    </div>
                    <div className="mealAll">
                        <div className="mealTitle">
                            <h1>Meal Types</h1>
                        </div>
                        <div className="mealDrop">
                            <select onChange={(e) => setTypeS(e.target.value)}>
                                <option>Select</option>
                                <option>Main Course</option>
                                <option>Side Dish</option>
                                <option>Dessert</option>
                                <option>Appetizer</option>
                                <option>Salad</option>
                                <option>Bread</option>
                                <option>Breakfast</option>
                                <option>Soup</option>
                                <option>Beverage</option>
                                <option>Sauce</option>
                                <option>Marinade</option>
                                <option>Fingerfood</option>
                                <option>Snack</option>
                                <option>Drink</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <div className="check">
                        <div className="checkTitle">
                            <h8>Cuisine</h8>
                        </div>
                        <CollapseFilter label="Select Cuisine" >
                        <div className={`checkChoices ${theme2}`}>
                            <input type="checkbox" name="african" onChange={handleCheck}/><span>African</span>
                            <input type="checkbox" name="american" onChange={handleCheck}/><span>American</span>
                            <br />
                            <input type="checkbox" name="british" onChange={handleCheck}/><span>British</span>
                            <input type="checkbox" name="cajun" onChange={handleCheck}/><span>Cajun</span>
                            <br />
                            <input type="checkbox" name="caribbean" onChange={handleCheck}/><span>Caribbean</span>
                            <input type="checkbox" name="eastern european" onChange={handleCheck}/><span>Eastern European</span>
                            <br />
                            <input type="checkbox" name="european" onChange={handleCheck}/><span>European</span>
                            <input type="checkbox" name="french" onChange={handleCheck}/><span>French</span>
                            <br />
                            <input type="checkbox" name="german" onChange={handleCheck}/><span>German</span>
                            <input type="checkbox" name="greek" onChange={handleCheck}/><span>Greek</span>
                            <br />
                            <input type="checkbox" name="indian" onChange={handleCheck}/><span>Indian</span>
                            <input type="checkbox" name="irish" onChange={handleCheck}/><span>Irish</span>
                            <br />
                            <input type="checkbox" name="italian" onChange={handleCheck}/><span>Italian</span>
                            <input type="checkbox" name="japanese" onChange={handleCheck}/><span>Japanese</span>
                            <br />
                            <input type="checkbox" name="jewish" onChange={handleCheck}/><span>Jewish</span>
                            <input type="checkbox" name="korean" onChange={handleCheck}/><span>Korean</span>
                            <br />
                            <input type="checkbox" name="latin american" onChange={handleCheck}/><span>Latin American</span>
                            <input type="checkbox" name="mediterranean" onChange={handleCheck}/><span>Mediterranean</span>
                            <br />
                            <input type="checkbox" name="mexican" onChange={handleCheck}/><span>Mexican</span>
                            <input type="checkbox" name="middle eastern" onChange={handleCheck}/><span>Middle Eastern</span>
                            <br />
                            <input type="checkbox" name="nordic" onChange={handleCheck}/><span>Nordic</span>
                            <input type="checkbox" name="southern" onChange={handleCheck}/><span>Southern</span>
                            <br />
                            <input type="checkbox" name="spanish" onChange={handleCheck}/><span>Spanish</span>
                            <input type="checkbox" name="thai" onChange={handleCheck}/><span>Thai</span>
                            <br />
                            <input type="checkbox" name="vietnamese" onChange={handleCheck}/><span>Vietnamese</span>
                        </div>
                        </CollapseFilter>
                    </div>
                    <br />
                    <div className="checkInlo">
                        <div className="checkInTitle">

                            <h8 >Intolerances</h8>
                        </div>
                           
                            <CollapseFilter label="Select Intolerances">

                                <div className={`checkInChoices ${theme2}`}>
                                    <input type="checkbox" name="dairy" onChange={handleCheck2}/><span>Dairy</span>
                                    <input type="checkbox" name="egg" onChange={handleCheck2}/><span>Egg</span>
                                    <input type="checkbox" name="gluten" onChange={handleCheck2}/><span>Gluten</span>
                                    <br />
                                    <input type="checkbox" name="grain" onChange={handleCheck2}/><span>Grain</span>
                                    <input type="checkbox" name="peanut" onChange={handleCheck2}/><span>Peanut</span>
                                    <input type="checkbox" name="seafood" onChange={handleCheck2}/><span>Seafood</span>
                                    <br />
                                    <input type="checkbox" name="sesame" onChange={handleCheck2}/><span>Sesame</span>
                                    <input type="checkbox" name="shellfish" onChange={handleCheck2}/><span>Shellfish</span>
                                    <input type="checkbox" name="soy" onChange={handleCheck2}/><span>Soy</span>
                                    <br />
                                    <input type="checkbox" name="sulfite" onChange={handleCheck2}/><span>Sulfite</span>
                                    <input type="checkbox" name="tree nut" onChange={handleCheck2}/><span>Tree Nut</span>
                                    <input type="checkbox" name="wheat" onChange={handleCheck2}/><span>Wheat</span>
                                </div>

                            </CollapseFilter>
                       
            </div>
            </div>
            
            <div className="Search">
                
                <div className={` box  ${theme2}`}>
                    <input type="text" name="query"  className={`input `} placeholder="Search for a dish..." 
                    onChange={(e) => setQuery(e.target.value)} />
                    
                </div>
                <Search query={query} cuisine={cuisine} dietS={dietS} typeS={typeS} intolerances={intolerances}/>
            </div>
            
        </div>
        </StickyBox>
        </div>
      </div>
        
    )

}