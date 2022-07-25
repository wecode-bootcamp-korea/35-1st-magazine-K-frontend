/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Detail from './Detail/Detail';

const ProductDetail = () => {
  const [prdDetailData, setPrdDetailData] = useState([]);
  // const location = useLocation();
  // const cate_no = searchParams.get('cate_no');
  // const issue_number = searchParams.get('issue_number');
  // console.log(location.search);

  let { product_id } = useParams();
  // console.log(product_id);

  useEffect(() => {
    fetch(`http://10.58.1.115:8000/products/${product_id}`)
      .then(res => res.json())
      .then(data => {
        setPrdDetailData([data.RESULTS]);
      });
  }, []);
  // console.log(prdDetailData);

  return prdDetailData.map(prdDetailData => {
    return (
      <Detail key={prdDetailData.issue_number} prdDetailData={prdDetailData} />
    );
  });
};
export default ProductDetail;
