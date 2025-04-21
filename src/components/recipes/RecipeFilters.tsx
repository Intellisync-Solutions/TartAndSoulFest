import React from 'react';
import { RecipeCategory } from './RecipeTypes';
import { ICON_MAP } from '../../pages/RecipesPage';
import type { LucideIcon } from 'lucide-react';

interface RecipeFiltersProps {
  categories: RecipeCategory[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const RecipeFilters: React.FC<RecipeFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchQuery}
      onChange={e => onSearchChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
    />
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        className={`px-4 py-2 rounded-full font-semibold border ${selectedCategory === null ? 'bg-[#00A89F] text-white' : 'bg-gray-100 text-gray-800'}`}
        onClick={() => onCategoryChange(null)}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat.name}
          className={`px-4 py-2 rounded-full font-semibold border ${selectedCategory === cat.name ? 'bg-[#00A89F] text-white' : 'bg-gray-100 text-gray-800'}`}
          onClick={() => onCategoryChange(cat.name)}
        >
          <span className="inline-flex items-center gap-1">
            {cat.icon && (() => {
              const iconMap: Record<string, LucideIcon> = ICON_MAP;
              const Icon = iconMap[cat.icon];
              return Icon ? <Icon size={16} /> : null;
            })()}
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default RecipeFilters;
