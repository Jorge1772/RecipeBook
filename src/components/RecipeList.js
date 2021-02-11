import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from '../App';

export default function RecipeList({ recipes }) {
   const { handleRecipeAdd } = useContext(RecipeContext)

    return (
        <div className='recipe-list'>
    <div>
        {recipes.map(recipes =>{
            return ( 
            <Recipe key={recipes.id} {...recipes}/>)
        })}
    </div>
        <div className='recipe-list_add-recipe-btn-container'> 
    </div>
     <button className='btn btn--primary' onClick={handleRecipeAdd} > Add Recipe </button>
     </div>
    )
}
