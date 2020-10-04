import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="card-columns" >
      {recipes?
        recipes.data.recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.title}
          image={recipe.image_url}
          recipeid={recipe.recipe_id}
        //   ingredientLines={recipe.recipe.ingredientLines}
        />))
        // <div><h1>Hello</h1></div>
      :null}
    </div>
  );
};

export default Recipes;