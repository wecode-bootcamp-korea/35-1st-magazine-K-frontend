import { useNavigate } from 'react-router-dom';
import './CashComponent.scss';

const CashComponent = ({ totalPrice, userpoint, token }) => {
  const point = parseInt(userpoint).toLocaleString('ko-KR');
  const totalAmount = totalPrice.toLocaleString('ko-KR');
  const navigate = useNavigate();
  const pay = () => {
    fetch(`http://10.58.3.49:8000/orders`, {
      method: 'PATCH',
      headers: {
        AUTHORIZATION: token,
      },
      body: JSON.stringify({
        price_total: totalPrice,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ORDER_COMPLETED') {
          alert('결제가 완료되었습니다.');
        }
      });
  };

  return (
    <div className="payBox">
      <div className="totalProductAmount">
        <p>현재 포인트</p>
        <p>
          <span>₩</span>
          {point}
        </p>
      </div>
      <div className="deliveryFree">
        <p>총 상품금액</p>
        <p>
          <span>₩</span>
          {totalAmount}
        </p>
      </div>
      <div className="deliveryFree">
        <p>배송비</p>
        <p>
          <span>₩</span>0
        </p>
      </div>
      <div className="TotalPay">
        <p>총 결제금액</p>
        <p>
          <span>₩</span>
          {totalAmount}
        </p>
      </div>
      <div className="TotalPay">
        <p>남은 포인트</p>
        <p>
          <span>₩</span>
          {parseInt(point) - parseInt(totalAmount)},000
        </p>
      </div>
      <div className="Paybutton">
        <button className="orderButton">선택상품주문</button>
        <button
          className="AllorderButton"
          onClick={() => {
            if (window.confirm('결제 하시겠습니까?')) {
              pay();
              navigate('/');
            }
          }}
        >
          전체 상품주문
        </button>
      </div>
    </div>
  );
};
export default CashComponent;
