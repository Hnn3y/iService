import { createContext, useContext, useState } from "react";

// Create Context
const CategoryContext = createContext();

// Create Provider
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => setSelectedCategory(category);
  const clearCategory = () => setSelectedCategory(null);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, selectCategory, clearCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// Custom hook 
export const useCategory = () => useContext(CategoryContext);
