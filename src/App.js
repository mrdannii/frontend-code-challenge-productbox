import './App.css';
import AllProducts from './pages/AllProducts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddNewProduct from './pages/AddNewProduct';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
      <Router>
      <Navbar />
      <Routes>
        <Route index element={<AllProducts />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
