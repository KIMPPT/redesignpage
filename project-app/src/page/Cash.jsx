import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import "../CSS/cash.css";
export default function Cash() {
  let { state } = useContext(DataContext);
  let onechoice = state.lastchoice;
  let navigate = useNavigate();
  return (
    <div>
      <h1>단일 구매페이지 입니다</h1>
      <div>
        <h3>이름 : {onechoice.name}</h3>
        <h3>옵션 : {onechoice.option} </h3>
        <h3>가격 : {onechoice.price.toLocaleString()}원</h3>
        <h3>갯수 : {onechoice.choice}개</h3>
        <h3>최종가격 : {onechoice.allprice.toLocaleString()}원</h3>
        <h4>해당 주문이 맞다면 '결제 페이지로 이동' 버튼을 눌려주십시오</h4>
        <p>
          만약 해당 단일 주문을 없애고 싶으시다면{" "}
          <span className="gotoitempage" onClick={() => navigate("/item1")}>
            아이템 화면
          </span>{" "}
          페이지로 가서 다시 단일 주문을 해주시면 됩니다
        </p>
        <button
          className="gotocash"
          onClick={() =>
            onechoice.allprice === 0
              ? alert("물건을 구매하지 않았습니다")
              : (alert("결제페이지로 갑니다"), navigate("/"))
          }
        >
          결제 페이지로 이동
        </button>
      </div>
    </div>
  );
}
