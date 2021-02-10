import React from 'react'
import Recipe from './Recipe'


export default function RecipeList({ recipes }) {
    return (
        <div className='recipe-list'>
    <div>
        {recipes.map(recipes =>{
            return (
            <Recipe 
            key={recipes.id} 
            {...recipes} 
            />
            )
        })}
    </div>
        <div className='recipe-list_add-recipe-btn-container'> 
    </div>
     <button className='btn btn--primary'> Add Recipe </button>
     </div>
    )
}
