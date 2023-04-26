import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
export default function Bucket() {
  let { state, action } = useContext(DataContext);
  let deleitethatlist = (e) => {
    let newlist = state.choiceprice.filter((list) => list.id !== e);
    action.setChoiceprice(newlist);
  };
  let sumprice = 0;
  let onlypricelist = state.choiceprice.map(
    (list) => (sumprice += list.allprice)
  );
  //console.log(onlypricelist)
  return (
    <div>
      <h1>장바구니 페이지 입니다</h1>
      <h3>총 가격 : {sumprice}원 입니다</h3>
      {state.choiceprice.map((list, id) => (
        <div key={id}>
          <p>
            {/*
            {list.id} <br />
            */}
            옵션 : {list.name} <br />
            단가 : {list.price} <br />
            갯수 : {list.choice} <br />
            최종 가격 : {list.allprice}
          </p>
          <button onClick={() => deleitethatlist(list.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}
