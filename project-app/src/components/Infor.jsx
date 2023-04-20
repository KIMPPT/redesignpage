import React,{ useRef, useState } from "react";
import "../CSS/infor.css";
import useMoveScroll from "./UseMoveScroll";
export default function Infor() {
  let [ischeck, setIscheck] = useState(false);
  let {element,onMoveToElement}=useMoveScroll();
  return (
    <div className="inforbox">
      <img
        src="/image/10002000.png"
        alt="제품홍보사진칸입니다."
        className={ischeck?"inforimg":"inforimg on"}
      />
      <div className="boxbutton">
        <button
          className="inforbutton"
          onClick={() => {
            setIscheck((e) => !e);
          }}
        >
          {ischeck ? "접기" : "더 보기"}
        </button>
      </div>
    </div>
  );
}