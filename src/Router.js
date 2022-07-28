import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import Main from './pages/Main/Main';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

import ProductList from './pages/ProductList/ProductList';

import Cart from './pages/Cart/Cart';

const Router = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/Products/:product_id"
          element={<ProductDetail setModalState={setModalState} />}
        />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
