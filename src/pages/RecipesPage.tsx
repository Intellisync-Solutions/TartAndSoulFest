import React, { useState } from 'react';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import PageHero from '../components/ui/PageHero';
import SubmitRecipeModal from '../components/recipe/SubmitRecipeModal';
import GradientText from '../components/ui/GradientText';
import RecipeGrid from '../components/recipes/RecipeGrid';
import RecipeFilters from '../components/recipes/RecipeFilters';
import RecipeDetailModal from '../components/recipes/RecipeDetailModal';
import { Recipe, RecipeCategory } from '../components/recipes/RecipeTypes';
import { CakeSlice, Coffee, Utensils, Leaf, Plus, Star, Heart, Clock, Users, Award } from 'lucide-react';

export const ICON_MAP = {
  cake: CakeSlice,
  coffee: Coffee,
  utensils: Utensils,
  leaf: Leaf,
  plus: Plus,
  star: Star,
  heart: Heart,
  clock: Clock,
  users: Users,
  award: Award
};

// Recipe categories with icons and colors

const RECIPE_CATEGORIES: RecipeCategory[] = [
  {
    name: "Classic Tarts",
    icon: "cake",
    color: "#00A89F",
    description: "Traditional butter tart recipes celebrating Canadian heritage"
  },
  {
    name: "Soul Food Fusion",
    icon: "coffee",
    color: "#FFA600",
    description: "Innovative combinations of soul food flavors with butter tart traditions"
  },
  {
    name: "Seasonal Specials",
    icon: "utensils",
    color: "#8EF4B6",
    description: "Limited edition tarts featuring seasonal ingredients and flavors"
  },
  {
    name: "Vegan & Alternative",
    icon: "leaf",
    color: "#10B981",
    description: "Plant-based and dietary-alternative versions of our favorite tarts"
  }
];

import { RECIPES } from '../components/recipes/RecipeData';

const RECIPES_PER_PAGE = 3;

const RecipesPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Fix: Use case-insensitive and trimmed comparison for categories
  const filteredRecipes = RECIPES.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Robust category match
    const matchesCategory =
      !selectedCategory ||
      recipe.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase();

    // TEMP DEBUG: Log category comparison
    if (selectedCategory) {
      console.log(`Comparing recipe.category: '${recipe.category}' with selectedCategory: '${selectedCategory}' => ${matchesCategory}`);
    }

    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE);
  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * RECIPES_PER_PAGE,
    currentPage * RECIPES_PER_PAGE
  );

  // Fix: Only allow valid page numbers and update currentPage
  const handlePageChange = (page: number) => {
    // Guard: Prevent going below 1 or above totalPages
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };


  // Reset to first page on filter/search change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <>
     
<PageHero
          variant="home"
          title="Tart & Soul Recipes"
          subtitle="Bake, Share, and Celebrate"
          image="/images/recipes-hero.jpg"
          highlights={[
            { icon: ICON_MAP["cake"], text: "Classic Recipes" },
            { icon: ICON_MAP["coffee"], text: "Soul Food Fusion" },
            { icon: ICON_MAP["leaf"], text: "Dietary Options" }
          ]}
        />
        <div className="min-h-screen bg-[#2E1F1F] pt-20">
  <GradientText className="block text-4xl md:text-6xl font-extrabold text-center mb-4">
    Tart & Soul Recipes
  </GradientText>
        <div className="container mx-auto px-4 py-12">
          
          {/* Search and Filters */}
          <div className="mb-12">
            <RecipeFilters
              categories={RECIPE_CATEGORIES}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <button
              type="button"
              onClick={() => { console.log('Submit Recipe button clicked'); setIsSubmitModalOpen(true); }}
              className="ml-4 bg-[#00A89F] text-[#2E1F1F] px-6 py-3 rounded-full font-bold flex items-center gap-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#00A89F] focus:ring-offset-2"
            >
              <Plus size={20} />
              Submit Recipe
            </button>
          </div>

          {/* Recipe Grid */}
          <RecipeGrid recipes={paginatedRecipes} onRecipeSelect={setSelectedRecipe} />

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors ${currentPage === idx + 1 ? 'bg-[#00A89F] text-white' : ''}`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
              </button>
            </nav>
          </div>

          {/* Recipe Detail Modal */}
          <RecipeDetailModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />

          {/* Submit Recipe Modal */}
          <SubmitRecipeModal
            isOpen={isSubmitModalOpen}
            onClose={() => setIsSubmitModalOpen(false)}
          />
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default RecipesPage;