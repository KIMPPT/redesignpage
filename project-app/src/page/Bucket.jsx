import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import "../CSS/bucket.css";
export default function Bucket() {
  let navigate = useNavigate();
  let { state, action } = useContext(DataContext);
  useEffect(() => {}, []);
  //state.id===0&&navigate(-1)
  let deleitethatlist = (e) => {
    let newlist = state.choiceprice.filter((list) => list.id !== e);
    action.setChoiceprice(newlist);
  };
  let sumprice = 0;
  let onlypricelist = state.choiceprice.map(
    (list) => (sumprice += list.allprice)
  );
  let sumchoice = 0;
  let onlychoicelist = state.choiceprice.map(
    (list) => (sumchoice += Number(list.choice))
  );
  let canbuy = 0;
  state.choiceprice.map((array) =>
    state.stock < array.choice ? (canbuy += 1) : canbuy
  );
  //console.log(onlypricelist)
  return (
    <div>
      <h1>장바구니 페이지 입니다</h1>
      <h3>
        총 가격 :{" "}
        {(
          (sumchoice >= 100 || sumprice === 0 ? 0 : 3000) + sumprice
        ).toLocaleString()}
        원 입니다
      </h3>
      <h3>
        총 갯수가 {sumchoice}개 이므로 배송비는{" "}
        {sumchoice >= 100 ? "무료" : "3000원"}입니다
      </h3>
      <table className="bucketTablefixed">
        <tbody>
          <tr className="bucketTr">
            <td>물품이름</td>
            <td>옵션</td>
            <td>단가</td>
            <td>갯수</td>
            <td>최종가격</td>
            <td>삭제버튼</td>
          </tr>
        </tbody>
      </table>
      {state.choiceprice.map((list, id) => (
        <div key={id}>
          <table className="bucketTable">
            <tbody>
              <tr className="bucketTr">
                <td>{list.name}</td>
                <td>{list.option}</td>
                <td>{list.price.toLocaleString()}</td>
                <td>{list.choice}</td>
                <td>{list.allprice.toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("해당 장바구니 물품을 삭제하시겠습니까?")
                      ) {
                        alert("해당 장바구니 물품을 삭제합니다");
                        deleitethatlist(list.id);
                      }
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            </tbody>
            {/*
            {list.id} <br />
            */}
          </table>
        </div>
      ))}
      {/*각각의 갯수를 재고량과 비교해서 장바구니 중 재고량보다 많은 경우 띄우는 경고문 */}
      {/*state.choiceprice.map((array, id) =>
        state.stock < array.choice ? (
          <div key={id}>
          <h3 className="warning" >
            특정 물건이 현재 재고량 보다 많이 때문에 구입이 불가능합니다
          </h3>
          <h3>
            주문을 원하신다면 123-5678로 문의를 해 주시면 답변을 드리겠습니다
          </h3>
          </div>
        ) : (
          ""
        )
        )*/}
      <h3 className="impact">
        장바구니에 있는 모든 물건들을 사겠다면 '모두 구매하기' 버튼을 눌려
        주십시오
      </h3>
      <button
        disabled={canbuy === 0 ? false : true}
        className="bucketCash"
        onClick={() =>
          sumprice === 0
            ? alert("물건을 구매하지 않았습니다")
            : (alert("결제페이지로 갑니다"), navigate("/"))
        }
      >
        {canbuy === 0 ? "모두 구매하기" : "구매불가"}
      </button>
    </div>
  );
}
