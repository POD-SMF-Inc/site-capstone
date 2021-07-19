import "./HomeRL.css"
export default function HomeRL({ element })
{
    console.log("Element Home: ", element)
    return (
        <div className="HomeRecipe">
            <div className="RecipeTitle">
                <h1>{element.title}</h1>
            </div>
            <div className="Picture">
                <img src={element.image} alt="Smoothie"></img>
            </div>
        </div>
    )
}