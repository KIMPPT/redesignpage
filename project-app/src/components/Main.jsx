import React from "react";
import "../CSS/main.css";
export default function Main() {
  return (
    <div className="box">
      <div>
        <img src="https://raw.githubusercontent.com/KIMPPT/Project/master/project-app/src/image/300.png" alt="이미지자리입니다" className="mainimagelarge" />
      </div>
      <div className="nav">
        <img src="https://raw.githubusercontent.com/KIMPPT/Project/master/project-app/src/image/100.png" alt="작은이미지1입니다" className="wrap" />
        <img src="https://raw.githubusercontent.com/KIMPPT/Project/master/project-app/src/image/100-2.png" alt="작은이미지2입니다" className="wrap" />
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>물품이름 :</td>
              <td>물품명</td>
            </tr>
            <tr>
              <td>옵션 :</td>
              <td></td>
            </tr>
            <tr>
              <td>구매 수량 :</td>
              <td></td>
            </tr>
            <tr>
              <td>배송비 :</td>
              <td></td>
            </tr>
            <tr>
              <td>현재 재고량 :</td>
              <td></td>
            </tr>
            <tr>
              <td>최종 가격 : </td>
              <td>옵션*구매수량+배송비</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button>물품 설명</button>
        <button>상세 설명</button>
        <button>관련 물품</button>
      </div>
    </div>
  );
}
