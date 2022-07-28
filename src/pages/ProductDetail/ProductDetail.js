import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import Detail from './Detail/Detail';
import Review from './Review';

const ProductDetail = ({ setModalState }) => {
  const [prdDetailData, setPrdDetailData] = useState([]);
  let { product_id } = useParams();
  // console.log(product_id);

  // useEffect(() => {
  //   fetch('/data/ProductDetailData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setPrdDetailData(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://10.58.3.49:8000/products/${product_id}`)
      .then(res => res.json())
      .then(data => {
        setPrdDetailData([data.RESULTS]);
        // console.log(data.RESULTS);
        // setReviewData(data.RESULTS.reviews);
        // console.log(data.RESULTS);
      });
  }, []);

  return (
    <>
      {prdDetailData.map(prdDetailData => {
        return (
          <Detail
            key={prdDetailData.issue_number}
            prdDetailData={prdDetailData}
            product_id={product_id}
            setModalState={setModalState}
          />
        );
      })}
      <Review />
    </>
  );
};
export default ProductDetail;
