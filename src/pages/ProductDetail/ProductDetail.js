/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import '../../components/Detail/Detail';
import Detail from '../../components/Detail/Detail';

const ProductDetail = () => {
  const [prdDetailData, setPrdDetailData] = useState([]);

  useEffect(() => {
    fetch('/data/ProductDetailData.json')
      .then(res => res.json())
      .then(data => {
        setPrdDetailData(data);
      });
  }, []);

  return <Detail prdDetailData={prdDetailData} />;
};

export default ProductDetail;
