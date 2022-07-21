import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import Main from './pages/Main/Main';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

import ProductList from './pages/ProductList/ProductList';

import Cart from './pages/Cart/Cart';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/ProductDetail/:issue_number"
          element={<ProductDetail />}
        />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

{
  /* <Route path="/Products/:id" element={<ProductDetail />} /> */
}
