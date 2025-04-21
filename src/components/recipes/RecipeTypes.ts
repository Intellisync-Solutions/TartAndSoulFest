export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Comment {
  id: number;
  author: string;
  authorAvatar?: string;
  content: string;
  datePosted: string;
  likes: number;
  replies?: Comment[];
}

export interface RecipeCategory {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Recipe {
  story?: string;
  id: number;
  title: string;
  author: string;
  authorAvatar?: string;
  image: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime?: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  ingredients: { name: string; amount: string; notes?: string }[];
  instructions: { step: number; text: string; tip?: string }[];
  tips?: string[];
  nutritionInfo?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  rating: number;
  dateSubmitted: string;
  isApproved: boolean;
  votes: number;
  comments: Comment[];
  tags: string[];
  category: string;
  isFeatured?: boolean;
  isSeasonalPick?: boolean;
  equipment?: string[];
  allergens?: string[];
  serveWithSuggestions?: string[];
  reviews: Review[];
  cuisine: string;
}
