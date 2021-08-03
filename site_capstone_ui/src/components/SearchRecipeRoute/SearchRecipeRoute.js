import React, {  useState, useEffect } from "react"
import "./SearchRecipeRoute.css"
import ReactPaginate from "react-paginate"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"

export default function SearchRecipeRoute({ randomRecipe, totalResults }) {
    console.log("randomRecipe: ", randomRecipe.slice(0, 2))
    console.log("totalResults in SRR: ", totalResults)
    //const [ items, setItems ] = useState([])
    const [ visible, setVisible ] = useState(1)
    const [recipesS, setRecipesS] = useState(randomRecipe.slice(0, 100))//slice(0, totalResults)
    const [pageNumber, setPageNumber] = useState(0)
    useEffect(() => {
        const setRecipes = () => {
            setRecipesS(randomRecipe.slice(0, 100))
        }
        setRecipes()
    }, [randomRecipe])
    console.log("RecipesS: ", recipesS)
    
    const recipesPerPage = 10
    const pagesVisited = pageNumber * recipesPerPage
    //setItems(randomRecipe)
    console.log("rand: ", randomRecipe)
    console.log("type: ", typeof(randomRecipe))
    console.log("pagesVisted: ", pagesVisited)
    console.log("RecipesS: ", recipesS)
    const displayRecipes = recipesS.slice(pagesVisited, pagesVisited + recipesPerPage).map(element => {
        return(
            <div className="SepRecipePage">
                <SeperateRecipe element={element} />
                {console.log("elementMAp: ", element)}
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
        <div className="SearchRR">
            {displayRecipes}
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
            {/* {randomRecipe?.length === 0 ? null : <button onClick={loadMore}>Load More</button>}
            {
                randomRecipe?.slice(0, visible).map(element => (
                    <>
                            <SeperateRecipe element={element} />
                    </>
                ))
            } */}
            
        </div>
    )
}