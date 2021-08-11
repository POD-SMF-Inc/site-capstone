import React from "react"
import "./IngredientRR.css"
import { useEffect, useState} from "react"
import ReactPaginate from "react-paginate"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"

export default function IngredientRR({ randomRecipe }) {
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
    const recipesPerPage = 8
    const pagesVisited = pageNumber * recipesPerPage
    const displayRecipes = recipesS.slice(pagesVisited, pagesVisited + recipesPerPage).map(element => {
        return(
            <div className="SepRecipePage">
                <SeperateRecipe element={element} />
                {console.log("elementMAp: ", element)}
            </div>
        )
    })

    //const [ isShown, setIsShown ] = useState(value)
    const loadMore = () => {
        setVisible((prevValue) => prevValue + 1)
    }

    const pageCount = Math.ceil(recipesS.length / recipesPerPage)
     const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    return (
        <div className="IngredientRR">
            {displayRecipes}
            { randomRecipe?.length === 0 ? null : <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />}
            {/* {
                randomRecipe?.slice(0, visible).map(element => (
                    <>

                            <SeperateRecipe element={element} />
        
                    </>
                ))
            }
            {randomRecipe?.length === 0 ? null : <button onClick={loadMore}>Load More</button>} */}
            
        </div>
    )
}