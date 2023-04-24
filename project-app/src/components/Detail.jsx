import React from "react";
import { useRef,useContext } from "react";
import { forwardRef } from "react";
import { DataProvider } from "../context/DataContext";
import DataContext from "../context/DataContext";
export default function Detail() {
  let {state}=useContext(DataContext);
  let goto=state.refmove[1].move;
  console.log(goto)
  let ref=useRef(null);
    return (
      <div ref={ref} id="2">
        <img
          src="/image/1000700.png"
          alt="상세이미지입니다"
          className="detailimage"
        />
        <h3>교환 및 환불에 대한 안내</h3>
      </div>
    );
}
