import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import "../CSS/bucket.css";
export default function Bucket() {
  let navigate = useNavigate();
  let { state, action } = useContext(DataContext);
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
      <h3>
        장바구니에 있는 모든 물건들을 사겠다면 '모두 구매하기' 버튼을 눌려
        주십시오
      </h3>
      <button
        className="bucketCash"
        onClick={() =>
          sumprice === 0
            ? alert("물건을 구매하지 않았습니다")
            : (alert("결제페이지로 갑니다"), navigate("/"))
        }
      >
        모두 구매하기
      </button>
    </div>
  );
}
