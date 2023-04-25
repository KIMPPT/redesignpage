import React,{useState } from "react";
import "../CSS/infor.css";
export default function Infor() {
  let [ischeck, setIscheck] = useState(false);
  return (
    <div className="inforbox" id="1" >
      <img
        src="/image/longimage.jpg"
        alt="제품홍보사진칸입니다."
        className={ischeck?"inforimg":"inforimg on"}
        style={{width:'70%'}}
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