import React from "react"


const RecipesCard = ({recipe}) => {
const {idMeal, strMeal, strCategory, strMealThumb} = recipe

    return(
        <div className="card">
            <img src={strMealThumb} alt={strMeal} className="card-image"></img>
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3 className="strMeal">{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Ingredientes</a>
            </div>
        </div>
    )
}

export default RecipesCard