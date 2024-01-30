import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ShopCatagory from "./Pages/ShopCatagory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LogInSignUp from "./Pages/LogInSignUp";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'
import all_products_banner from './Components/Assests/allProductBanner.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ShopCatagory banner={men_banner} category="men"/>}/>
          <Route path="/women" element={<ShopCatagory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCatagory banner={kid_banner} category="kid"/>}/>
          <Route path="/allProducts" element={<ShopCatagory banner={all_products_banner} category="allproducts"/>}/>
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LogInSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

