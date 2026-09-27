import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const SortFilter = () => {
  const { sortOrder, setSortOrder } = useContext(ProductContext);

  return (
    <div className=" flex justify-end">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="select select-bordered w-full sm:w-52"
      >
        <option value="default">Sort by Price</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortFilter;
