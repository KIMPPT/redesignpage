import React from "react";
import { Link, NavLink as Navlink } from "react-router-dom";
import "../CSS/navlink.css";
export default function NavLink() {
  return (
    <div className="navall">
      <Navlink
        className={({ isActive }) => (isActive ? "navlink exist" : "navlink")}
        to="/"
      >
        메인 페이지
      </Navlink>
      {/*
      <Navlink
        className={({ isActive }) => (isActive ? "navlink exist" : "navlink")}
        to="/product1/item1"
      >
        물품 화면
      </Navlink>
    */}

      <Navlink
        className={({ isActive }) => (isActive ? "navlink exist" : "navlink")}
        to="/bucket"
      >
        보관함 화면
      </Navlink>

      <Navlink
        className={({ isActive }) => (isActive ? "navlink exist" : "navlink")}
        to="/cash"
      >
        단일 구매 화면
      </Navlink>
    </div>
  );
}
