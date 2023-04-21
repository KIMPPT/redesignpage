import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";
export default function Detail() {
  let ref=useRef(null);
  let detail=forwardRef((props,ref)=>
  {
    return (
      <div  ref={ref} >
        <img
          src="/image/1000500.png"
          alt="상세이미지입니다"
          className="detailimage"
        />
        <h3>교환 및 환불에 대한 안내</h3>
      </div>
    );


  }
  )
}
