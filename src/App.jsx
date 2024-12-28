import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Navbar from "./Navigation/Navbar";
import Produts from "./Components/Products";
import { useState } from "react";

export default function App() {

  let [cart, setcart] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart cart={cart}/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home/Products/:cate_id" element={<Produts setcart={setcart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
