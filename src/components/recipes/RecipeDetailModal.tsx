import React from 'react';
import { Recipe } from './RecipeTypes';
import { AnimatePresence } from 'framer-motion';
import TartRecipe from '../recipe/TartRecipe';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => (
  <AnimatePresence>
    {recipe && (
      <TartRecipe
        recipe={{ ...recipe, equipment: recipe.equipment ?? [] }}
        onClose={onClose}
        isModal={true}
      />
    )}
  </AnimatePresence>
);

export default RecipeDetailModal;
