/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Detail from './Detail/Detail';

const ProductDetail = () => {
  const [prdDetailData, setPrdDetailData] = useState([]);
  const location = useLocation();
  // const cate_no = searchParams.get('cate_no');
  // const issue_number = searchParams.get('issue_number');
  // console.log(location.search);

  useEffect(() => {
    fetch(`http://10.58.4.155:8000/products/detail${location.search}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setPrdDetailData(data.result);
      });
  }, []);

  return prdDetailData.map(prdDetailData => {
    return (
      <Detail key={prdDetailData.issue_number} prdDetailData={prdDetailData} />
    );
  });
};
export default ProductDetail;
