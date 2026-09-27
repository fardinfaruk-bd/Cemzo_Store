import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { searchTerm, setSearchTerm } =
    useContext(ProductContext);

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          Cemzo Store
        </a>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input w-40 md:w-64"
        />
      </div>
    </nav>
  );
};

export default Navbar;