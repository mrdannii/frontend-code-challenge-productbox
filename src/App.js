import './App.css';
import AllProducts from './pages/AllProducts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddNewProduct from './pages/AddNewProduct';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import BadRoute from './pages/BadRoute';
import Home from './pages/Home';

function App() {
  return (
    <div className="App ">
      <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="all-products" element={<AllProducts/>} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="all-products/:productId" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<BadRoute />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
