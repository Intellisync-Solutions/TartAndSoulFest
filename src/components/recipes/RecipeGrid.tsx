import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from './RecipeTypes';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, onRecipeSelect }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {recipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onClick={() => onRecipeSelect(recipe)}
      />
    ))}
  </div>
);

export default RecipeGrid;
