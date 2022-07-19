import React from 'react';
import { useNavigate, 'react-router-dom';
import { useState, useEffect } from 'react';

import Product from './Product';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    fetch('/data/productList.json')
      .then(res => res.json())
      .then(res => setProdList(res));
  }, []);

  return (
    <div className="productListPage">
      <div className="menuTapContainer">
        <div className="magazineKTap">
          Magazine K   </div>
        <div className="fashionTap">
          Fashion   </div>
        <div className="beautyTap">
          Beauty   </div>
        <div className="designLifestyleTap">
          Design Lifestyle   </div>
      </div>
      <div className="prodlistContainer">
        {prodList.map(prod => (
          <Product key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
