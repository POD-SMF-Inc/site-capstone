import "./Filter.css"
import { useState } from "react"
import Search from "../Search/Search"
import Collapsible from "../Collapsible/Collapsible"
export default function Filter() {
    const [query, setQuery] = useState("")
    let cuisine = []
    let intolerances = []
    //const [cuisine, setCuisine] = useState([])
    
    const [dietS, setDietS] = useState("")
    const [typeS, setTypeS] = useState("")
    const [check, setCheck] = useState({})
    const [intol, setIntol] = useState({})

    /*
    function handleData(event)
    {
        
        console.log("diet: ", dietS)
        console.log("meal type: ", typeS)
        console.log("Check boxes: ", check)
        console.log("query: ", query)
    }
    */

    const handleCheck = (event) => {
        setCheck((f) => ({ ...f, [event.target.name]: event.target.checked }))
    }

    const handleCheck2 = (event) => {
        setIntol((f) => ({ ...f, [event.target.name]: event.target.checked }))
    }

    function objectArr(object, arrayL)
    {
        Object.entries(object).forEach(element => {
            //console.log("ele: ", element)
            if (element[1] === true)
            {
                arrayL.push(element[0])
            }
        })
        
    }

    objectArr(check, cuisine)
    objectArr(intol, intolerances)
    //setCuisine(cusArr)
    console.log(cuisine)
    console.log("intol: ", intolerances)

    //create a function to check whether checkboxes were fixed yes
    // if they were then append them to the thing

    //create a function to parse through ingredients 
    return (
        <div className="searchSec">
            <div className="filter">
                <div className="title">
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
                            <h3>Cuisine</h3>
                        </div>
                        <Collapsible label="Select Cuisine">
                        <div className="checkChoices">
                            <input type="checkbox" name="african" onChange={handleCheck}/><span>African</span>
                            <input type="checkbox" name="american" onChange={handleCheck}/><span>American</span>
                            <input type="checkbox" name="british" onChange={handleCheck}/><span>British</span>
                            <input type="checkbox" name="cajun" onChange={handleCheck}/><span>Cajun</span>
                            <input type="checkbox" name="caribbean" onChange={handleCheck}/><span>Caribbean</span>
                            <input type="checkbox" name="eastern european" onChange={handleCheck}/><span>Eastern European</span>
                            <input type="checkbox" name="european" onChange={handleCheck}/><span>European</span>
                            <input type="checkbox" name="french" onChange={handleCheck}/><span>French</span>
                            <input type="checkbox" name="german" onChange={handleCheck}/><span>German</span>
                            <input type="checkbox" name="greek" onChange={handleCheck}/><span>Greek</span>
                            <input type="checkbox" name="indian" onChange={handleCheck}/><span>Indian</span>
                            <input type="checkbox" name="irish" onChange={handleCheck}/><span>Irish</span>
                            <input type="checkbox" name="italian" onChange={handleCheck}/><span>Italian</span>
                            <input type="checkbox" name="japanese" onChange={handleCheck}/><span>Japanese</span>
                            <input type="checkbox" name="jewish" onChange={handleCheck}/><span>Jewish</span>
                            <input type="checkbox" name="korean" onChange={handleCheck}/><span>Korean</span>
                            <input type="checkbox" name="latin american" onChange={handleCheck}/><span>Latin American</span>
                            <input type="checkbox" name="mediterranean" onChange={handleCheck}/><span>Mediterranean</span>
                            <input type="checkbox" name="mexican" onChange={handleCheck}/><span>Mexican</span>
                            <input type="checkbox" name="middle eastern" onChange={handleCheck}/><span>Middle Eastern</span>
                            <input type="checkbox" name="nordic" onChange={handleCheck}/><span>Nordic</span>
                            <input type="checkbox" name="southern" onChange={handleCheck}/><span>Southern</span>
                            <input type="checkbox" name="spanish" onChange={handleCheck}/><span>Spanish</span>
                            <input type="checkbox" name="thai" onChange={handleCheck}/><span>Thai</span>
                            <input type="checkbox" name="vietnamese" onChange={handleCheck}/><span>Vietnamese</span>
                        </div>
                        </Collapsible>
                    </div>
                    <div className="checkInlo">
                        <div className="checkInTitle">
                            <h3>Intolerances</h3>
                            <Collapsible label="Select Intolerances">
                                <div className="checkInChoices">
                                    <input type="checkbox" name="dairy" onChange={handleCheck2}/><span>Dairy</span>
                                    <input type="checkbox" name="egg" onChange={handleCheck2}/><span>Egg</span>
                                    <input type="checkbox" name="gluten" onChange={handleCheck2}/><span>Gluten</span>
                                    <input type="checkbox" name="grain" onChange={handleCheck2}/><span>Grain</span>
                                    <input type="checkbox" name="peanut" onChange={handleCheck2}/><span>Peanut</span>
                                    <input type="checkbox" name="seafood" onChange={handleCheck2}/><span>Seafood</span>
                                    <input type="checkbox" name="sesame" onChange={handleCheck2}/><span>Sesame</span>
                                    <input type="checkbox" name="shellfish" onChange={handleCheck2}/><span>Shellfish</span>
                                    <input type="checkbox" name="soy" onChange={handleCheck2}/><span>Soy</span>
                                    <input type="checkbox" name="sulfite" onChange={handleCheck2}/><span>Sulfite</span>
                                    <input type="checkbox" name="tree nut" onChange={handleCheck2}/><span>Tree Nut</span>
                                    <input type="checkbox" name="wheat" onChange={handleCheck2}/><span>Wheat</span>
                                </div>
                            </Collapsible>
                        </div>
            </div>
            </div>
            
            <div className="Search">
                <div className="query">
                    {/* <label htmlFor="search">Search</label> */}
                    <input type="text" name="query" placeholder="Search Dish" 
                    onChange={(e) => setQuery(e.target.value)} />
                </div>
                <Search query={query} cuisine={cuisine} dietS={dietS} typeS={typeS} intolerances={intolerances}/>
            </div>
        </div>
    )

}