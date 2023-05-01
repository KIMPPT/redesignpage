import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navlink.css";
export default function NavLink() {
  return (
    <div className="navall">
      <Link to="/" className="navlink">
        메인페이지
      </Link>

      <Link to="/item1" className="navlink">
        아이템 화면
      </Link>

      <Link to="/bucket" className="navlink">
        보관함 화면
      </Link>

      <Link to="/cash" className="navlink">
        단일 구매 화면
      </Link>
    </div>
  );
}
