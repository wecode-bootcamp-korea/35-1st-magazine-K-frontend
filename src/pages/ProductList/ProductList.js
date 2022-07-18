import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productlist">
      <div className="menuTapContainer">
        <div className="magazineKTap">Magazine K</div>
        <div className="fashionTap">Fashion</div>
        <div className="beautyTap">Beauty</div>
        <div className="designLifestyleTap">Design Lifestyle</div>
      </div>
      <div className="productlistContainer">
        <div className="productWrapper">
          <img
            className="product1-1"
            src="/images/product1-1.jpg"
            alt="product1-1"
          />
          <img
            className="product1-2"
            src="/images/product1-2.jpg"
            alt="product1-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
