import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const productsPerPage = 12;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=0"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Search
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const contextValue = {
    products,
    filteredProducts,
    paginatedProducts,

    categories,

    searchTerm,
    setSearchTerm: handleSearchChange,

    selectedCategory,
    setSelectedCategory: handleCategoryChange,

    currentPage,
    setCurrentPage,

    totalPages,

    loading,
    error,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;