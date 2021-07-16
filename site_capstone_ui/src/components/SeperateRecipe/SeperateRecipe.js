export default function SeperateRecipe({ element })
{
    console.log("Element: ", element)
    return (
        <div className="SepReci">
            <p>{element.title}</p>
            <img src={element.image} alt="Smoothie"></img>
        </div>
    )
}

/*<div className="SepReci">
            <p>{element.title}</p>
            <img src={element.image} alt="Smoothie"></img>
        </div> */