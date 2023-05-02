import React from "react";
import { Link } from "react-router-dom";
import "../CSS/mainpage.css";
export default function Mainpage() {
  return (
    <div>
      <h1>Mainpage 입니다</h1>
      <Link to="/item1">
        <button className="product1">철사</button>
      </Link>
    </div>
  );
}
