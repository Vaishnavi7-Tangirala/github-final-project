import { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      <h1>Welcome to Paradise Nursery</h1>

      {!showProductList && (
        <button onClick={() => setShowProductList(true)}>
          Get Started
        </button>
      )}

      {showProductList && <ProductList />}
    </div>
  );
}

export default App;
