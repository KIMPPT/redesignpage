import React from "react";
import "../CSS/others.css";
import { useNavigate } from "react-router-dom";
export default function Others() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>해당 상품과 관련된 물품</h1>
      <div className="otherflex" id="3">
      {/*
      div-a-img-br-span 부분이 반복된다.
      이 부분은 filter로 똑같은 객체를 제거하고 그 객체에서 꺼내 쓰는 방법이 좋을듯함
      문제는 filter로 어떻게 값을 비교해서 제거할 것인가?
      */}
        <div>
          <a href="/product1/item2">
            <img src={`${process.env.PUBLIC_URL}/image/image2.png`} alt="" className="otherimages" />
            <br />
            <span>제품2</span>
          </a>
        </div>
        <div>
          <a href="/product1/item3">
            <img src={process.env.PUBLIC_URL+"/image/image3.jpg"} alt="" className="otherimages" />
            <br />
            <span>제품3</span>
          </a>
        </div>
        <div>
          <a href="/product1/item4">
            <img src={process.env.PUBLIC_URL+"/image/image4.jpg"} alt="" className="otherimages" />
            <br />
            <span>제품4</span>
          </a>
        </div>
        <div>
          <a href="/product1/item5">
            <img src={process.env.PUBLIC_URL+"/image/image5.jpg"} alt="" className="otherimages" />
            <br />
            <span>제품5</span>
          </a>
        </div>
      </div>
      <h3>그 외 공장에서 생산하고 있는 제품들</h3>
      <div className="otherbuttons">
        <a href="/itemcheck/product2">
          <button className="otherproductbutton iron">철근</button>
        </a>
        <a href="/itemcheck/product3">
          <button className="otherproductbutton copper">구리선</button>
        </a>
        <a href="/itemcheck/product4">
          <button className="otherproductbutton nickel">니켈선</button>
        </a>
      </div>
    </div>
  );
}
