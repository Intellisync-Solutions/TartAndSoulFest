import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Recipe } from '../../components/recipes/RecipeTypes';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#2E1F1F] rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-48 bg-[#3A2C2C]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500">{recipe.title}</span>
        </div>
        {recipe.isFeatured && (
          <span className="absolute top-2 right-2 bg-[#00A89F] text-xs text-white px-2 py-1 rounded-full">Featured</span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-xl text-white mb-1">{recipe.title}</h3>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>By {recipe.author}</span>
          <span>•</span>
          <span>{recipe.category}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Award size={16} className="text-[#FFA600] mr-1" />
            <span className="text-gray-300">{recipe.rating} Rating</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="bg-[#00A89F] text-[#2E1F1F] px-4 py-2 rounded-full text-sm font-bold"
          >
            View Recipe
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
