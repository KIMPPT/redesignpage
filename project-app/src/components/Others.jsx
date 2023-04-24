import React from "react";
import "../CSS/others.css";
export default function Others() {
  return (
    <div>
      <div className="otherflex" id="3">
        <div>
          <a href="/image1/others">
            <img src="/image/50.png" alt="" />
            <br />
            <span>제품2</span>
          </a>
        </div>
        <div>
          <a href="/image1/others2">
            <img src="/image/50.png" alt="" />
            <br />
            <span>제품3</span>
          </a>
        </div>
        <div>
          <a href="/image1/others3">
            <img src="/image/50.png" alt="" />
            <br />
            <span>제품4</span>
          </a>
        </div>
        <div>
          <a href="/others4">
            <img src="/image/50.png" alt="" />
            <br />
            <span>제품5</span>
          </a>
        </div>
      </div>
      <div className="otherbuttons">
        <a href="/image2">
          <button>제품군2</button>
        </a>
        <a href="/image3">
          <button onClick={() => {}}>제품군3</button>
        </a>
        <a href="/image4">
          <button onClick={() => {}}>제품군4</button>
        </a>
      </div>
    </div>
  );
}
