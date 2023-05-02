import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import "../CSS/cash.css";
export default function Cash() {
  let { state } = useContext(DataContext);
  let onechoice = state.lastchoice;
  let navigate = useNavigate();
  let canbuy = onechoice.choice > state.stock;
  return (
    <div className="cashPage">
      <h1>단일 구매페이지 입니다</h1>
      <div>
        <table className="cashTable">
          <tbody>
            <tr>
              <th>이름</th>
              <td>{onechoice.name}</td>
            </tr>
            <tr>
              <th>옵션</th>
              <td>{onechoice.option}</td>
            </tr>
            <tr>
              <th>가격</th>
              <td>{onechoice.price.toLocaleString()}원</td>
            </tr>
            <tr>
              <th>갯수</th>
              <td>{onechoice.choice}개</td>
            </tr>
            <tr>
              <th>배송비</th>
              <td>{onechoice.choice >= 100 ? "무료" : "3000원"}</td>
            </tr>
            <tr>
              <th>총가격</th>
              <td>
                {(
                  (onechoice.choice >= 100 || onechoice.choice === 0
                    ? 0
                    : 3000) + onechoice.allprice
                ).toLocaleString()}
                원
              </td>
            </tr>
          </tbody>
        </table>
        {/*canbuy ? (
          <h3 className="warning">
            재고량보다 많은 갯수를 주문하였습니다
            <br />
            주문을 원하신다면 123-5678로 문의를 해 주시면 답변을 드리겠습니다
          </h3>
        ) : (
          ""
        )*/}
        <h4 className="impact">해당 주문이 맞다면 '결제 페이지로 이동' 버튼을 눌려주십시오</h4>
        <p>
          만약 해당 단일 주문을 없애고 싶으시다면{" "}
          <span className="gotoitempage" onClick={() => navigate("/item1")}>
            아이템 화면
          </span>{" "}
          페이지로 가서 다시 단일 주문을 해주시면 됩니다
        </p>
        <button
          disabled={canbuy ? true : false}
          className="gotocash"
          onClick={() =>
            onechoice.allprice === 0
              ? alert("물건을 구매하지 않았습니다")
              : (alert("결제페이지로 갑니다"), navigate("/"))
          }
        >
          {canbuy ? "구매불가" : "결제 페이지로 이동"}
        </button>
      </div>
    </div>
  );
}
