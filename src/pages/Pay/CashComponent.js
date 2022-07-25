import './CashComponent.scss';

const CashComponent = () => {
  return (
    <div className="payBox">
      <div className="totalProductAmount">
        <p>총 상품금액</p>
        <p>
          <span>₩</span>
          60,000
        </p>
      </div>
      <div className="deliveryFree">
        <p>배송비</p>
        <p>
          <span>₩</span>0
        </p>
      </div>
      <div className="TotalPay">
        <p>총결제금액</p>
        <p>
          <span>₩</span>
          60000
        </p>
      </div>
      <div className="Paybutton">
        <button className="orderButton">선택상품주문</button>
        <button className="AllorderButton">전체 상품주문</button>
      </div>
    </div>
  );
};
export default CashComponent;
