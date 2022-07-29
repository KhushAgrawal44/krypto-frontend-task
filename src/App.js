import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Register from "./pages/Register"
import ProductList from "./pages/ProductList"
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
