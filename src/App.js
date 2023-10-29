import './App.css';
import AllProducts from './pages/AllProducts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddNewProduct from './pages/AddNewProduct';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App ">
      <Router>
      <Navbar />
      <Routes>
        <Route index element={<AllProducts />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="/:productId" element={<ProductDetail />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
