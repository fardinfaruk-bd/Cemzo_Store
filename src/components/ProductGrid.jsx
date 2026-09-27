import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

import ProductCard from "./ProductCard";
import ErrorMessage from "./ErrorMessage";
import EmptyState from "./EmptyState";
import Loading from "./loading";

const ProductGrid = () => {
  const {paginatedProducts, loading, error } = useContext(ProductContext);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (paginatedProducts.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {paginatedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;