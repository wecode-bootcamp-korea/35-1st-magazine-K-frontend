/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Detail from './Detail/Detail';

const ProductDetail = () => {
  const [prdDetailData, setPrdDetailData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const cate_no = searchParams.get('cate_no');
  const issue_number = searchParams.get('issue_number');

  useEffect(() => {
    fetch(
      `http://10.58.4.28:8000/products/detail?issue=${parseInt(
        issue_number
      )}&category=${parseInt(cate_no)}`
    )
      .then(res => res.json())
      .then(data => {
        setPrdDetailData(data.result);
      });
  }, []);

  // useEffect(() => {
  //   // console.log(prdDetailData);
  //   setSearchParams({ issue_number: prdDetailData[0].issue_number });
  // });

  return prdDetailData.map(prdDetailData => {
    return (
      <Detail key={prdDetailData.issue_number} prdDetailData={prdDetailData} />
    );
  });
};
export default ProductDetail;
