const ProductCard = ({ product }) => {
  const { title, thumbnail, price, category, rating } = product;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      
      <div className="flex h-56 items-center justify-center bg-gray-50 p-4">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <h2 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mb-3 text-sm capitalize text-gray-500">
          {category}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ${price}
          </p>

          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span>⭐</span>
            <span className="text-sm font-medium text-gray-700">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;