
const Recipe = (props) =>{
    return (
        <div className="dish">
            <h1>{props.recipe.label}</h1>
            <p>calories: {Math.round(props.recipe.calories)}</p>
            <img src={props.recipe.image}></img>
        </div>
    )
}

export default Recipe;