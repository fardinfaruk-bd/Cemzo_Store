import Layout from "./components/Layout";
import CategoryFilter from "./components/CategoryFilter";
import SortFilter from "./components/SortFilter";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";

import "./App.css";
function App() {
  return (
    <Layout>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <CategoryFilter />
        <SortFilter />
      </div>

      <ProductGrid />
      <Pagination />
    </Layout>
  );
}

export default App;