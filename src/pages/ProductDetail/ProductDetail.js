import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import Detail from './Detail/Detail';
import Review from './Review';

const ProductDetail = () => {
  const [prdDetailData, setPrdDetailData] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  let { product_id } = useParams();

  // useEffect(() => {
  //   fetch('/data/ProductDetailData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setPrdDetailData(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://10.58.4.155:8000/products/${product_id}`)
      .then(res => res.json())
      .then(data => {
        setPrdDetailData([data.RESULTS]);
        setReviewData(data.RESULTS.reviews);
      });
  }, []);

  return (
    <>
      {prdDetailData.map(prdDetailData => {
        return (
          <Detail
            key={prdDetailData.issue_number}
            prdDetailData={prdDetailData}
          />
        );
      })}
      <Review reviewData={reviewData} />
    </>
  );
};
export default ProductDetail;
