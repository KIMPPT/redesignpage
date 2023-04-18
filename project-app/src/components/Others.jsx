import React from "react";
import "../CSS/others.css";
export default function Others() {
  return (
    <div>
      <div className="otherflex">
        <button className="left go">{`<`}</button>
        <div>
          <a href="">
            <img src="" alt="" />
            <p>제품2</p>
          </a>
        </div>
        <div>
        <a href="">
            <img src="" alt="" />
            <p>제품3</p>
          </a>
        </div>
        <div>
        <a href="">
            <img src="" alt="" />
            <p>제품4</p>
          </a>
        </div>
        <button className="right go">{`>`}</button>
      </div>
      <button>제품군2</button>
      <button>제품군3</button>
      <button>제품군4</button>
    </div>
  );
}
