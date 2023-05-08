import React, { useState } from "react";
import "../CSS/infor.css";
export default function Infor() {
  let [ischeck, setIscheck] = useState(false);
  return (
    <div className="inforbox" id="1">
      <h1>물품 설명</h1>
      {/*
       */}
      <div className={ischeck ? "imagebox" : "imagebox on"}>
        <img
          src={process.env.PUBLIC_URL+"/image/longimage.jpg"}
          alt="제품홍보사진칸입니다."
          className="inforimg"
          style={{ width: "90%" }}
        />
      </div>
      <div className={ischeck?"boxbutton toggle":"boxbutton"}>
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
