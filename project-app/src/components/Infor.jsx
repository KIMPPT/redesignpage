import React,{useState } from "react";
import "../CSS/infor.css";
export default function Infor() {
  let [ischeck, setIscheck] = useState(false);
  return (
    <div className="inforbox" id="1" >
      <div className={ischeck?"imagebox":"imagebox on"}>
      <img
        src="/image/longimage.jpg"
        alt="제품홍보사진칸입니다."
        className="inforimg"
        style={{width:'70%'}}
      />
      </div>
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