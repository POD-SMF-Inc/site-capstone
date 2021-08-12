import React from "react"
import "./IngredientRR.css"
import { useEffect, useState, useContext} from "react"
import ReactPaginate from "react-paginate"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function IngredientRR({ randomRecipe }) {

    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  
   
    
    //console.log("rand: ", randomRecipe)
    //console.log("type: ", typeof(randomRecipe))
    const [recipesS, setRecipesS] = useState(randomRecipe.slice(0, 100))//slice(0, totalResults)

    const [pageNumber, setPageNumber] = useState(0)
    const [ visible, setVisible ] = useState(1)
    useEffect(() => {
        const setRecipes = () => {
            setRecipesS(randomRecipe.slice(0, 100))
        }
        setRecipes()
    }, [randomRecipe])
    const recipesPerPage = 12
    const pagesVisited = pageNumber * recipesPerPage
    const displayRecipes = recipesS.slice(pagesVisited, pagesVisited + recipesPerPage).map(element => {
        return(
            <div className="SepRecipePage">
                <SeperateRecipe element={element} />
            </div>
        )
    })
    const loadMore = () => {
        setVisible((prevValue) => prevValue + 1)
    }

    const pageCount = Math.ceil(recipesS.length / recipesPerPage)
     const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    return (
        <div className={`IngredientRR ${theme}`}>
            {displayRecipes}
            { randomRecipe?.length === 0 ? null : <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={`paginationBttns  `}
                previousLinkClassName={`previousBttn ${theme2}`}
                nextLinkClassName={`nextBttn  ${theme2}`}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />}
        </div>
    )
}