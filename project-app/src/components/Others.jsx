import React from "react";
import "../CSS/others.css";
export default function Others() {
  return (
    <div>
      <div className="otherflex">
        <button className="left go">{`<`}</button>
        <div>
          <a href="">
            <img
              src="/image/50.png"
              alt=""
            />
            <br />
            <span>제품2</span>
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="/image/50.png"
              alt=""
            />
            <br />
            <span>제품3</span>
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="/image/50.png"
              alt=""
            />
            <br />
            <span>제품4</span>
          </a>
        </div>
        <button className="right go">{`>`}</button>
      </div>
      <div className="otherbuttons">
        <button>제품군2</button>
        <button>제품군3</button>
        <button>제품군4</button>
      </div>
    </div>
  );
}
