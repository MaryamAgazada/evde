import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Basket from './pages/basket/Basket';
import Wishlist from './pages/wishlist/Wishlist';
import Detail from './pages/detail/Detail';
import Layout from './layout/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="Add" element={<Add />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="Wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
