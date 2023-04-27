import React from "react";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
export default function Cash() {
  let { state } = useContext(DataContext);
  let onechoice = state.lastchoice;
  let navigate = useNavigate();
  useEffect(() => {
    if (onechoice.allprice === 0) {
      alert("선택하지 않았습니다");
      navigate(-1);
    }
  }, []);
  return (
    <div>
      <h1>단일 구매페이지 입니다</h1>
      <div>
        <h3>옵션 : {onechoice.name} </h3>
        <h3>가격 : {onechoice.price} </h3>
        <h3>갯수 : {onechoice.choice} </h3>
        <h3>최종가격 : {onechoice.allprice}</h3>
      </div>
    </div>
  );
}
