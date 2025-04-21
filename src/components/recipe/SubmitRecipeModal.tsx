import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CakeSlice, Clock, Users, AlertTriangle,
  Upload, Plus, Minus, Info
} from 'lucide-react';
import GradientText from '../ui/GradientText';

interface SubmitRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitRecipeModal: React.FC<SubmitRecipeModalProps> = ({ isOpen, onClose }) => {
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<{ step: number; text: string }[]>([{ step: 1, text: '' }]);
  const [acknowledgements, setAcknowledgements] = useState({
    termsAndConditions: false,
    allergenDisclosure: false,
    publicationRights: false
  });

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    setInstructions([
      ...instructions,
      { step: instructions.length + 1, text: '' }
    ]);
  };

  const removeInstruction = (index: number) => {
    const updated = instructions.filter((_, i) => i !== index).map((inst, idx) => ({ ...inst, step: idx + 1 }));
    setInstructions(updated);
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = { ...newInstructions[index], text: value };
    setInstructions(newInstructions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement recipe submission
    onClose();
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#2E1F1F] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  <GradientText variant="secondary">Submit Your Recipe</GradientText>
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#3A2C2C] text-gray-400"
                >
                  <X />
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Recipe Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                      placeholder="Enter your recipe title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Description</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                      rows={3}
                      placeholder="Describe your recipe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white mb-2">Prep Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                          placeholder="e.g., 30 mins"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white mb-2">Cook Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                          placeholder="e.g., 45 mins"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white mb-2">Servings</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="number"
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                          placeholder="e.g., 6"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <label className="block text-white mb-2">Ingredients</label>
                  <div className="space-y-3">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={ingredient}
                          onChange={(e) => updateIngredient(index, e.target.value)}
                          className="flex-1 px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                          placeholder="e.g., 2 cups flour"
                          required
                        />
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeIngredient(index)}
                          className="p-2 rounded-lg bg-[#3A2C2C] text-red-400"
                          disabled={ingredients.length === 1}
                        >
                          <Minus size={18} />
                        </motion.button>
                      </div>
                    ))}
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={addIngredient}
                      className="flex items-center gap-2 text-[#00A89F] px-4 py-2 rounded-lg border border-dashed border-[#00A89F] hover:bg-[#00A89F]/10"
                    >
                      <Plus size={18} />
                      Add Ingredient
                    </motion.button>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <label className="block text-white mb-2">Instructions</label>
                  <div className="space-y-3">
                    {instructions.map((instruction, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#00A89F] rounded-full flex items-center justify-center text-[#2E1F1F] font-bold">
                          {index + 1}
                        </div>
                        <input
                          type="text"
                          value={instruction.text}
                          onChange={(e) => updateInstruction(index, e.target.value)}
                          className="flex-1 px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 text-white focus:outline-none focus:border-[#00A89F]"
                          placeholder="Enter instruction step"
                          required
                        />
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeInstruction(index)}
                          className="p-2 rounded-lg bg-[#3A2C2C] text-red-400"
                          disabled={instructions.length === 1}
                        >
                          <Minus size={18} />
                        </motion.button>
                      </div>
                    ))}
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={addInstruction}
                      className="flex items-center gap-2 text-[#00A89F] px-4 py-2 rounded-lg border border-dashed border-[#00A89F] hover:bg-[#00A89F]/10"
                    >
                      <Plus size={18} />
                      Add Step
                    </motion.button>
                  </div>
                </div>

                {/* Recipe Image */}
                <div>
                  <label className="block text-white mb-2">Recipe Image</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-gray-400 mb-4">
                      Drag and drop your image here, or click to select
                    </p>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3A2C2C] text-white px-4 py-2 rounded-lg inline-flex items-center gap-2"
                    >
                      <Upload size={18} />
                      Upload Image
                    </motion.button>
                  </div>
                </div>

                {/* Acknowledgements */}
                <div className="space-y-4 bg-[#3A2C2C] p-4 rounded-lg">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <AlertTriangle className="text-[#FFA600]" size={20} />
                    Important Acknowledgements
                  </h3>
                  
                  <div className="space-y-3">
                    <label className="flex items-start gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={acknowledgements.termsAndConditions}
                        onChange={(e) => setAcknowledgements({
                          ...acknowledgements,
                          termsAndConditions: e.target.checked
                        })}
                        className="mt-1"
                        required
                      />
                      <span className="text-gray-300 group-hover:text-white">
                        I agree to the terms and conditions for recipe submissions
                      </span>
                    </label>
                    
                    <label className="flex items-start gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={acknowledgements.allergenDisclosure}
                        onChange={(e) => setAcknowledgements({
                          ...acknowledgements,
                          allergenDisclosure: e.target.checked
                        })}
                        className="mt-1"
                        required
                      />
                      <span className="text-gray-300 group-hover:text-white">
                        I acknowledge that I have disclosed all potential allergens in my recipe
                      </span>
                    </label>
                    
                    <label className="flex items-start gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={acknowledgements.publicationRights}
                        onChange={(e) => setAcknowledgements({
                          ...acknowledgements,
                          publicationRights: e.target.checked
                        })}
                        className="mt-1"
                        required
                      />
                      <span className="text-gray-300 group-hover:text-white">
                        I grant permission for my recipe to be published and shared on the platform
                      </span>
                    </label>
                  </div>

                  <div className="flex items-start gap-2 mt-4 p-3 bg-[#2E1F1F] rounded-lg">
                    <Info className="text-[#00A89F] flex-shrink-0" size={20} />
                    <p className="text-sm text-gray-400">
                      Your recipe will be reviewed by our team before being published. We'll notify you once it's approved.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-[#3A2C2C]"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00A89F] text-white px-6 py-2 rounded-lg flex items-center gap-2"
                  >
                    <CakeSlice size={18} />
                    Submit Recipe
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmitRecipeModal;