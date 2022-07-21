/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail/Detail';

const ProductDetail = () => {
  const [prdDetailData, setPrdDetailData] = useState([]);

  let { issue_number } = useParams();

  useEffect(() => {
    fetch('/data/ProductDetailData.json')
      .then(res => res.json())
      .then(data => {
        setPrdDetailData(data);
      });
  }, []);

  return prdDetailData.map(prdDetailData => {
    return (
      <Detail key={prdDetailData.issue_number} prdDetailData={prdDetailData} />
    );
  });
};

export default ProductDetail;
