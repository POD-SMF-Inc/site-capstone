import "./SeperateRecipe.css"
export default function SeperateRecipe({ element })
{
    console.log("Element: ", element)
    return (
        <div className="SepReci">
            <div className="content">
                <div className="recipeTitle">
                    <h1>{element.title}</h1>
                </div>
                <div className="Picture">
                    <img src={element.image} alt="MEal"></img>
                </div>
            </div> 
        </div>
    )
}

/*<div className="SepReci">
            <p>{element.title}</p>
            <img src={element.image} alt="Smoothie"></img>
        </div> */