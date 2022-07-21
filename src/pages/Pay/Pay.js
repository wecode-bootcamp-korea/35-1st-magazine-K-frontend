import React from 'react';
import './Pay.scss';

const Pay = () => {
  return (
    <div className="payPageWrapper">
      <div className="payPageBox">
        <div className="choiceBox">
          <div className="choiceBoxController">
            <label>
              <input type="checkbox" name="checkAll" />
              전체선택
            </label>
            <p>선택삭제</p>
          </div>
          <div className="choiceBoxController">
            <div className="itemInformation">
              <label>
                <input type="checkbox" name="checkAll" />
                RAMYUN
              </label>
              <p>$15000</p>
              <input className="SelectQuantity" />
            </div>
            <div>
              <img
                src="https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg"
                alt="hellow"
                className="orderItem"
              />
            </div>
          </div>
        </div>
        <div className="payBox">
          <div className="totalProductAmount">
            <p>총 상품금액</p>
            <p>$60,000</p>
          </div>
          <div className="deliveryFree">
            <p>배송비</p>
            <p>$0</p>
          </div>
          <div className="TotalPay">
            <p>총결제금액</p>
            <p>$60000</p>
          </div>
          <div className="Paybutton">
            <button className="orderButton">선택상품주문</button>
            <button className="AllorderButton">전체 상품주문</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
