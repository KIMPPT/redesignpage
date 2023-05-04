import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../CSS/mainpage.css";
export default function Mainpage() {
  let productarray = ["철사", "철근"];
  let { state, action } = useContext(DataContext);
  let buttonname = state.buttonname;
  let newarray = () => {
    let newButtonname = buttonname.filter(
      (name) => name.productname === productarray[1]
    );
    action.setButtonname(newButtonname);
    console.log(state.buttonname);
  };
  return (
    <div className="mainPage">
      <h1>생산 제품 페이지 입니다</h1>
      <div className="productList">
        <Link to="product1">
          <button className="product first">철사</button>
        </Link>
        <Link to="product2">
          <button className="product second">철근</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
