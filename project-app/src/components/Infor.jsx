import React from "react";
import "../CSS/infor.css";
export default function Infor() {
  return (
    <div className="inforbox">
      <img
        src="https://raw.githubusercontent.com/KIMPPT/Project/master/project-app/src/image/10002000.png"
        alt="제품홍보사진칸입니다."
        className="inforimg on"
      />
      <div className="boxbutton">
      <button className="inforbutton"
      onClick={()=>{}}>더 보기</button>
      </div>
    </div>
  );
}
