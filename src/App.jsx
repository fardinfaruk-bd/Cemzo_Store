import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import Layout from "./components/layout";

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