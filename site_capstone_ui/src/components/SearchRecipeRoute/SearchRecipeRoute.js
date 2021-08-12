import React, {  useState, useEffect, useContext } from "react"
import "./SearchRecipeRoute.css"
import ReactPaginate from "react-paginate"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SearchRecipeRoute({ randomRecipe, totalResults }) {
    const context = useContext(ThemeContext);
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;

    const [ visible, setVisible ] = useState(1)
    const [recipesS, setRecipesS] = useState(randomRecipe.slice(0, 100))
    const [pageNumber, setPageNumber] = useState(0)
    useEffect(() => {
        const setRecipes = () => {
            setRecipesS(randomRecipe.slice(0, 100))
        }
        setRecipes()
    }, [randomRecipe])
    
    const recipesPerPage = 9
    const pagesVisited = pageNumber * recipesPerPage

    const displayRecipes = recipesS.slice(pagesVisited, pagesVisited + recipesPerPage).map(element => {
        return(
            <div className={`SepRecipePage `}>
                <SeperateRecipe element={element}  />
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
        <div className={`SearchRR  `}>
            {displayRecipes}
            
            <ReactPaginate  
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={`paginationBttns  `}
                previousLinkClassName={`previousBttn  ${theme2} `}
                nextLinkClassName={`nextBttn ${theme2}`}
                disabledClassName={`paginationDisabled `}
                activeClassName={"paginationActive"}
                
            />
        </div>
    )
}