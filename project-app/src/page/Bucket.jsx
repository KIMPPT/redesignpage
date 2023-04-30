import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import '../CSS/bucket.css'
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

  //console.log(onlypricelist)
  return (
    <div>
      <h1>장바구니 페이지 입니다</h1>
      <h3>총 가격 : {sumprice}원 입니다</h3>
      {state.choiceprice.map((list, id) => (
        <div key={id}>
          <table className="bucketTable">
            <tbody>
              <tr className="bucketTr">
                <td>
                옵션 : {list.name}
                </td>
                <td>
                단가 : {list.price}
                </td>
                <td>
                갯수 : {list.choice}
                </td>
                <td>
                최종 가격 : {list.allprice}
                </td>
                <td>
                <button onClick={() => deleitethatlist(list.id)}>삭제</button>
                </td>
              </tr>
            </tbody>
            {/*
            {list.id} <br />
            */}
          </table>
        </div>
      ))}
    </div>
  );
}
