import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Users, Star, Heart,
  Share2, Bookmark, Printer, Scale,
  Thermometer, Timer, Utensils, AlertCircle, ChevronDown, X
} from 'lucide-react';
import GradientText from '../ui/GradientText';

import { Recipe } from '../recipes/RecipeTypes';



interface TartRecipeProps {
  recipe: Recipe;
  onClose?: () => void;
  isModal?: boolean;
}

const TartRecipe: React.FC<TartRecipeProps> = ({ recipe, onClose, isModal = false }) => {
  const [activeTab, setActiveTab] = useState<'recipe' | 'story' | 'reviews' | 'comments'>('recipe');
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'ingredients' | 'equipment' | 'instructions' | null>(null);
  const [servingMultiplier, setServingMultiplier] = useState(1);

  // Add null check for recipe
  if (!recipe) {
    return (
      <div className="bg-[#2E1F1F] rounded-xl p-6 text-center">
        <p className="text-gray-400">Recipe not found</p>
      </div>
    );
  }

  const adjustedServings = recipe.servings * servingMultiplier;

  const Container = isModal ? motion.div : 'div';
  const containerProps = isModal ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
    onClick: onClose
  } : {
    className: "w-full"
  };

  const Content = isModal ? motion.div : 'div';
  const contentProps = isModal ? {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    onClick: (e: React.MouseEvent) => e.stopPropagation(),
    className: "bg-[#2E1F1F] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
  } : {
    className: "bg-[#2E1F1F] rounded-xl w-full"
  };

  return (
    <Container {...containerProps}>
      <Content {...contentProps}>
        {/* Header Section */}
        <div className="relative">
          <div className="h-64 bg-[#3A2C2C] flex items-center justify-center">
            <span className="text-gray-500">{recipe.title}</span>
          </div>
          
          {/* Recipe Title & Actions */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  <GradientText variant="secondary">{recipe.title}</GradientText>
                </h1>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center">
                    <Star className="text-[#FFA600] w-5 h-5 mr-1" />
                    <span>{recipe.rating} ({Array.isArray(recipe.reviews) ? recipe.reviews.length : 0} reviews)</span>
                  </div>
                  <span>•</span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full ${
                    isLiked ? 'bg-[#00A89F]/20 text-[#00A89F]' : 'bg-[#3A2C2C] text-gray-400'
                  }`}
                >
                  <Heart className={isLiked ? 'fill-[#00A89F]' : ''} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-2 rounded-full ${
                    isSaved ? 'bg-[#FFA600]/20 text-[#FFA600]' : 'bg-[#3A2C2C] text-gray-400'
                  }`}
                >
                  <Bookmark className={isSaved ? 'fill-[#FFA600]' : ''} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-[#3A2C2C] text-gray-400"
                >
                  <Share2 />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-[#3A2C2C] text-gray-400"
                >
                  <Printer />
                </motion.button>
                {isModal && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-full bg-[#3A2C2C] text-gray-400"
                  >
                    <X />
                  </motion.button>
                )}
              </div>
            </div>

            {/* Recipe Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                <Clock className="w-6 h-6 text-[#00A89F] mx-auto mb-2" />
                <span className="block text-sm text-gray-400">Prep Time</span>
                <span className="text-white font-medium">{recipe.prepTime}</span>
              </div>
              <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                <Timer className="w-6 h-6 text-[#00A89F] mx-auto mb-2" />
                <span className="block text-sm text-gray-400">Cook Time</span>
                <span className="text-white font-medium">{recipe.cookTime}</span>
              </div>
              <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                <Users className="w-6 h-6 text-[#00A89F] mx-auto mb-2" />
                <span className="block text-sm text-gray-400">Servings</span>
                <div className="flex items-center justify-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setServingMultiplier(Math.max(0.5, servingMultiplier - 0.5))}
                    className="text-gray-400 hover:text-white"
                  >
                    -
                  </motion.button>
                  <span className="text-white font-medium">{adjustedServings}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setServingMultiplier(servingMultiplier + 0.5)}
                    className="text-gray-400 hover:text-white"
                  >
                    +
                  </motion.button>
                </div>
              </div>
              <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                <Thermometer className="w-6 h-6 text-[#00A89F] mx-auto mb-2" />
                <span className="block text-sm text-gray-400">Temperature</span>
                <span className="text-white font-medium">375°F</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-4 border-b border-gray-700 mb-6">
              <button
                onClick={() => setActiveTab('recipe')}
                className={`pb-2 px-1 relative ${
                  activeTab === 'recipe' ? 'text-[#00A89F]' : 'text-gray-400'
                }`}
              >
                Recipe
                {activeTab === 'recipe' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A89F]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('story')}
                className={`pb-2 px-1 relative ${
                  activeTab === 'story' ? 'text-[#00A89F]' : 'text-gray-400'
                }`}
              >
                Story
                {activeTab === 'story' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A89F]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-2 px-1 relative ${
                  activeTab === 'reviews' ? 'text-[#00A89F]' : 'text-gray-400'
                }`}
              >
                Reviews
                {activeTab === 'reviews' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A89F]"
                  />
                )}
              </button>
            </div>

            {/* Recipe Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'recipe' && (
                <motion.div
                  key="recipe"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-300">{recipe.description}</p>
                  </div>

                  {/* Ingredients (Expandable) */}
{recipe.ingredients?.length > 0 && (
  <div className="mb-4">
    <button
      className="flex items-center justify-between w-full px-4 py-3 bg-[#3A2C2C] rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#00A89F]"
      aria-expanded={expandedSection === 'ingredients'}
      aria-controls="ingredients-section"
      onClick={() => setExpandedSection(expandedSection === 'ingredients' ? null : 'ingredients')}
    >
      <span className="flex items-center gap-2 text-xl font-bold text-white">
        <Scale className="text-[#00A89F] w-5 h-5" /> Ingredients
      </span>
      <ChevronDown
        className={`w-6 h-6 transition-transform duration-200 ${expandedSection === 'ingredients' ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence initial={false}>
      {expandedSection === 'ingredients' && (
        <motion.div
          id="ingredients-section"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <ul className="space-y-3 p-4">
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A89F] mr-3" />
                <span className="font-medium mr-2">{ingredient.amount}</span>
                {ingredient.name}
                {ingredient.notes && (
                  <span className="text-gray-400 text-sm ml-2">({ingredient.notes})</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)}

{/* Equipment (Expandable) */}
{Array.isArray(recipe.equipment) && recipe.equipment.length > 0 && (
  <div className="mb-4">
    <button
      className="flex items-center justify-between w-full px-4 py-3 bg-[#3A2C2C] rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#00A89F]"
      aria-expanded={expandedSection === 'equipment'}
      aria-controls="equipment-section"
      onClick={() => setExpandedSection(expandedSection === 'equipment' ? null : 'equipment')}
    >
      <span className="flex items-center gap-2 text-xl font-bold text-white">
        <Utensils className="text-[#00A89F] w-5 h-5" /> Equipment
      </span>
      <ChevronDown
        className={`w-6 h-6 transition-transform duration-200 ${expandedSection === 'equipment' ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence initial={false}>
      {expandedSection === 'equipment' && (
        <motion.div
          id="equipment-section"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <ul className="space-y-3 p-4">
            {(recipe.equipment ?? []).map((item, idx) => (
  <li key={idx} className="flex items-center text-gray-300">
    <span className="w-1.5 h-1.5 rounded-full bg-[#00A89F] mr-3" />
    {item}
  </li>
))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)}

{/* Instructions (Expandable) */}
{recipe.instructions?.length > 0 && (
  <div className="mb-4">
    <button
      className="flex items-center justify-between w-full px-4 py-3 bg-[#3A2C2C] rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#00A89F]"
      aria-expanded={expandedSection === 'instructions'}
      aria-controls="instructions-section"
      onClick={() => setExpandedSection(expandedSection === 'instructions' ? null : 'instructions')}
    >
      <span className="flex items-center gap-2 text-xl font-bold text-white">
        <Timer className="text-[#00A89F] w-5 h-5" /> Instructions
      </span>
      <ChevronDown
        className={`w-6 h-6 transition-transform duration-200 ${expandedSection === 'instructions' ? 'rotate-180' : ''}`}
      />
    </button>
    <AnimatePresence initial={false}>
      {expandedSection === 'instructions' && (
        <motion.div
          id="instructions-section"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="space-y-6 p-4">
            {recipe.instructions.map((instruction) => (
              <div key={instruction.step} className="bg-[#2E1F1F] rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00A89F] rounded-full flex items-center justify-center text-[#2E1F1F] font-bold">
                    {instruction.step}
                  </div>
                  <div>
                    <p className="text-gray-300">{instruction.text}</p>
                    {instruction.tip && (
                      <div className="mt-3 flex items-start gap-2 text-sm bg-[#3A2C2C] p-3 rounded-lg">
                        <AlertCircle className="text-[#FFA600] w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-400">{instruction.tip}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)}

                  {/* Equipment */}
                  {Array.isArray(recipe.equipment) && recipe.equipment.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-white">Equipment</h2>
                        <Utensils className="text-[#00A89F] w-5 h-5" />
                      </div>
                      <div className="bg-[#3A2C2C] rounded-lg p-4">
                        <ul className="space-y-3">
                          {(recipe.equipment ?? []).map((item, idx) => (
  <li key={idx} className="flex items-center text-gray-300">
    <span className="w-1.5 h-1.5 rounded-full bg-[#00A89F] mr-3" />
    {item}
  </li>
))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Instructions */}
                  {recipe.instructions?.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-white mb-4">Instructions</h2>
                      <div className="space-y-6">
                        {recipe.instructions.map((instruction) => (
                          <div key={instruction.step} className="bg-[#3A2C2C] rounded-lg p-4">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#00A89F] rounded-full flex items-center justify-center text-[#2E1F1F] font-bold">
                                {instruction.step}
                              </div>
                              <div>
                                <p className="text-gray-300">{instruction.text}</p>
                                {instruction.tip && (
                                  <div className="mt-3 flex items-start gap-2 text-sm bg-[#2E1F1F] p-3 rounded-lg">
                                    <AlertCircle className="text-[#FFA600] w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-400">{instruction.tip}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recipe Tips */}
                  {Array.isArray(recipe.tips) && recipe.tips.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-white mb-4">Pro Tips</h2>
                      <div className="bg-[#3A2C2C] rounded-lg p-4">
                        <ul className="space-y-3">
                          {(recipe.tips ?? []).map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <Star className="text-[#FFA600] w-5 h-5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Nutrition Information */}
                  {recipe.nutritionInfo && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-white mb-4">Nutrition Information</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                          <span className="block text-[#00A89F] font-bold text-lg">
                            {recipe.nutritionInfo.calories}
                          </span>
                          <span className="text-sm text-gray-400">Calories</span>
                        </div>
                        <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                          <span className="block text-[#00A89F] font-bold text-lg">
                            {recipe.nutritionInfo.protein}
                          </span>
                          <span className="text-sm text-gray-400">Protein</span>
                        </div>
                        <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                          <span className="block text-[#00A89F] font-bold text-lg">
                            {recipe.nutritionInfo.carbs}
                          </span>
                          <span className="text-sm text-gray-400">Carbs</span>
                        </div>
                        <div className="bg-[#3A2C2C] p-4 rounded-lg text-center">
                          <span className="block text-[#00A89F] font-bold text-lg">
                            {recipe.nutritionInfo.fat}
                          </span>
                          <span className="text-sm text-gray-400">Fat</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Allergen Information */}
                  {Array.isArray(recipe.allergens) && recipe.allergens.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-white mb-4">Allergen Information</h2>
                      <div className="bg-[#3A2C2C] rounded-lg p-4">
                        <div className="flex flex-wrap gap-2">
                          {(recipe.allergens ?? []).map((allergen, idx) => (
  <span
    key={idx}
    className="px-3 py-1 bg-[#2E1F1F] text-[#FFA600] rounded-full text-sm"
  >
    {allergen}
  </span>
))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="prose prose-invert max-w-none"
                >
                  {recipe.story ? (
                    <div className="text-gray-300 space-y-4">
                      {recipe.story.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 italic">
                      No story has been shared for this recipe yet.
                    </p>
                  )}
                </motion.div>
              )}

              {activeTab === 'reviews' && (
  <motion.div
    key="reviews"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-white mb-4">Reviews</h2>
    {Array.isArray(recipe.reviews) && recipe.reviews.length > 0 ? (
      recipe.reviews.map((review) => (
        <div
          key={review.id}
          className="bg-[#3A2C2C] rounded-lg p-4 flex flex-col md:flex-row gap-4"
        >
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <Users className="w-8 h-8 text-[#00A89F] bg-[#2E1F1F] rounded-full p-1" />
            <span className="font-semibold text-white">{review.author}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < review.rating
                      ? 'w-4 h-4 text-[#FFA600] fill-[#FFA600]'
                      : 'w-4 h-4 text-gray-500'
                  }
                  fill={i < review.rating ? '#FFA600' : 'none'}
                />
              ))}
            </div>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-gray-400 italic">No reviews yet. Be the first to leave a review!</div>
    )}
  </motion.div>
)}

{activeTab === 'comments' && (
  <motion.div
    key="comments"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-white mb-4">Comments</h2>
    {Array.isArray(recipe.comments) && recipe.comments.length > 0 ? (
      recipe.comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-[#3A2C2C] rounded-lg p-4 flex flex-col md:flex-row gap-4"
        >
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <Users className="w-8 h-8 text-[#FFA600] bg-[#2E1F1F] rounded-full p-1" />
            <span className="font-semibold text-white">{comment.author}</span>
          </div>
          <div className="flex-1">
            <p className="text-gray-300">{comment.content}</p>
            <span className="text-xs text-gray-500 block mt-1">{comment.datePosted}</span>
            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-3 ml-4 border-l-2 border-[#00A89F]/40 pl-4">
                <span className="text-sm text-[#00A89F] font-semibold">Replies:</span>
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="mt-2">
                    <span className="font-semibold text-white">{reply.author}</span>:
                    <span className="text-gray-300 ml-2">{reply.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))
    ) : (
      <div className="text-gray-400 italic">No comments yet. Be the first to comment!</div>
    )}
  </motion.div>
)}

            </AnimatePresence>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default TartRecipe;