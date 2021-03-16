
const Recipe = (props) =>{
    return (
        <div className="dish">
            <div className="card">
                <div className="card-front">
                    <h1>{props.recipe.label}</h1>
                    <p>calories: {Math.round(props.recipe.calories)}</p>
                    <img src={props.recipe.image} alt=""></img>
                </div>

                <div className="card-back">
                    <h3>How much nutrition </h3>
                    <ul>    
                        <li>Fats :{Math.round(props.recipe.digest.[0].total)}</li>
                        <li>Carbs :{Math.round(props.recipe.digest.[1].total)}</li>
                        <li>Protein :{Math.round(props.recipe.digest.[2].total)}</li>
                    </ul>

                    <h4>URL <a href={props.recipe.url}>Recipe</a></h4>
                
                </div>
            </div>
        </div>
    )

}

export default Recipe;