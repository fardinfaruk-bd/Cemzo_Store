import Layout from "./components/Layout";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";

import "./App.css";
function App() {
  return (
    <Layout>
      <CategoryFilter />

      <ProductGrid />

      <Pagination />
    </Layout>
  );
}

export default App;