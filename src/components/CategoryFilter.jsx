import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CategoryFilter = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useContext(ProductContext);

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
            selectedCategory === category
              ? "bg-black text-white"
              : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;