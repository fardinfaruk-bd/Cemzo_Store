const EmptyState = () => {
  return (
    <div className="flex min-h-75 items-center justify-center px-4">
      <div className="text-center">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          No Products Found
        </h2>

        <p className="text-gray-500">
          We couldn't find any products matching your search.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;