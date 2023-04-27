import React from "react";
import "../CSS/others.css";
import { useNavigate } from "react-router-dom";
export default function Others() {
  let navigate=useNavigate();
  return (
    <div>
      <div className="otherflex" id="3">
        <div>
          <a href="/image1/others">
            <img src="/image/image2.png" alt="" className="otherimages" />
            <br />
            <span>제품2</span>
          </a>
        </div>
        <div>
          <a href="/image1/others2">
            <img src="/image/image3.jpg" alt="" className="otherimages" />
            <br />
            <span>제품3</span>
          </a>
        </div>
        <div>
          <a href="/image1/others3">
            <img src="/image/image4.jpg" alt="" className="otherimages" />
            <br />
            <span>제품4</span>
          </a>
        </div>
        <div>
          <a href="/others4">
            <img src="/image/image5.jpg" alt="" className="otherimages" />
            <br />
            <span>제품5</span>
          </a>
        </div>
      </div>
      <div className="otherbuttons">
        <a href="/image2">
          <button className="otherproductbutton">제품군2</button>
        </a>
        <a href="/image3">
          <button className="otherproductbutton">제품군3</button>
        </a>
        <a href="/image4">
          <button className="otherproductbutton">제품군4</button>
        </a>
      </div>
    </div>
  );
}
