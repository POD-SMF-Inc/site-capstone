import "./Filter.css"
import { useState } from "react"
import Search from "../Search/Search"
export default function Filter() {
    const [query, setQuery] = useState("")
    let cuisine = []
    //const [cuisine, setCuisine] = useState([])
    
    const [dietS, setDietS] = useState("")
    const [typeS, setTypeS] = useState("")
    const [check, setCheck] = useState({})

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

    function objectArr(object)
    {
        Object.entries(object).forEach(element => {
            console.log("ele: ", element)
            if (element[1] === true)
            {
                cuisine.push(element[0])
            }
        })
        
    }

    objectArr(check)
    //setCuisine(cusArr)
    console.log(cuisine)
    //create a function to check whether checkboxes were fixed yes
    // if they were then append them to the thing

    //create a function to parse through ingredients 
    return (
        <div className="searchSec">
            <div className="query">
                <label htmlFor="search">Search</label>
                <input type="text" name="query" placeholder="Search Dish" 
                onChange={(e) => setQuery(e.target.value)} />
            </div>
            <br />
            <div className="dropDown">
                <h3>Diet</h3>
                <select onChange={(e) => setDietS(e.target.value)}>
                    <option>Select</option>
                    <option>Gluten Free</option>
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
                <br />
                <h3>Meal Types</h3>
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
            <br />
            <div className="check">
                <h3>Cuisine Types</h3>
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
            <div className="Search">
                <Search query={query} cuisine={cuisine} dietS={dietS} typeS={typeS} />
            </div>
        </div>
    )

}