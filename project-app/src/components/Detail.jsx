import React from "react";
import { useRef, useContext } from "react";
import { forwardRef } from "react";
import { DataProvider } from "../context/DataContext";
import DataContext from "../context/DataContext";
import "../CSS/detail.css";
export default function Detail() {
  let { state } = useContext(DataContext);
  let goto = state.refmove[1].move;
  let ref = useRef(null);
  return (
    <div ref={ref} id="2">
      <img
        src="/image/1000700.png"
        alt="상세이미지입니다"
        className="detailimage"
      />
      <h3>교환 및 환불에 대한 안내</h3>
      <ol>
        <li>
          구입 후 일주일 내에 제품에 하자가 발생 시에는 무상으로 교환이나 환불을
          해 드립니다
        </li>
        <li>일주일이 지난 이후에는 유상으로 교환이나 환불을 해 드립니다</li>
        <li>단순 변심에 의한 환불의 경우 배송비를 요구 할 수 있습니다</li>
      </ol>
    </div>
  );
}
