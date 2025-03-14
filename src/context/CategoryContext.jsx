// src/context/CategoryContext.jsx
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(["General"]);

  const addCategory = (categoryName) => {
    if (categoryName && !categories.includes(categoryName)) {
      setCategories([...categories, categoryName]);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("useCategory must be used within a CategoryProvider");
  return context;
};
