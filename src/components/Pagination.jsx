import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Pagination = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
  } = useContext(ProductContext);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <span className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;