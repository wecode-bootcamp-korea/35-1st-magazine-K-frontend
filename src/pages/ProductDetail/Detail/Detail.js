/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import './Detail.scss';

const Detail = ({ prdDetailData }) => {
  const {
    published_date,
    description,
    product_image_url,
    isbn,
    issue_number,
    language,
    category,
    pages,
    price,
    size,
    title,
  } = prdDetailData;

  const priceThousand = price.toString().slice(0, 2);

  const [orderQuantity, setOrderQuantity] = useState(1);

  function minusOrderQuantity() {
    if (orderQuantity < 2) {
      setOrderQuantity(1);
      alert('최소 주문수량은 1개 입니다.');
    } else {
      setOrderQuantity(orderQuantity => orderQuantity - 1);
    }
  }

  function plusOrderQuantity() {
    setOrderQuantity(orderQuantity => orderQuantity + 1);
  }

  const PRD_META_INFO = [
    { id: 1, title: 'LANGUAGE', value: language },
    { id: 2, title: 'SIZE', value: size },
    { id: 3, title: 'PAGES', value: pages },
    { id: 4, title: 'DATE', value: published_date },
    { id: 5, title: 'ISBN', value: isbn },
  ];

  return (
    <div className="prdDetailPage">
      <div className="prdDetailContainer">
        <div className="prdDetailLeft">
          <div className="prdCategoryBox">
            <span className="prdCategory">{category}</span>
            <span className="prdNumber">ISSUE NO.{issue_number}</span>
          </div>
          <div className="prdTitle">{title}</div>
          <span className="prdPrice">₩{priceThousand},000</span>
          <div className="prdCount">
            <span onClick={minusOrderQuantity}>-</span>
            <span>{orderQuantity}</span>
            <span onClick={plusOrderQuantity}>+</span>
          </div>
          <div className="prdMetaInfo">
            {PRD_META_INFO.map(({ id, title, value }) => {
              return (
                <span key={id}>
                  <span>{title}</span>
                  <span>{value}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="prdDetailRight">
          <button>₩{priceThousand * orderQuantity},000 ADD TO CART</button>
          <div className="prdDescription">
            <p>DESCRIPTION</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="prdImg">
        <img src={product_image_url} alt="ARC" />
      </div>
    </div>
  );
};

export default Detail;
