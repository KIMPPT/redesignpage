import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../CSS/mainpage.css";
export default function Mainpage() {
  const [first,setFirst]=useState(false);
  const [second,setSecond]=useState(false);
  const [third,setThird]=useState(false);
  const [fourth,setFourth]=useState(false);
  const change1st=()=>{
    setFirst(!first)
    setSecond(false)
    setThird(false)
    setFourth(false)
  }
  const change2nd=()=>{
    setFirst(false)
    setSecond(!second)
    setThird(false)
    setFourth(false)
  }  
  const change3rd=()=>{
    setFirst(false)
    setSecond(false)
    setThird(!third)
    setFourth(false)
  }  
  const change4th=()=>{
    setFirst(false)
    setSecond(false)
    setThird(false)
    setFourth(!fourth)
  }
  return (
    <div className="mainPage">
      <h1>생산 제품 페이지 입니다</h1>
      <div className="productList">
          <button className="product first"
          onClick={change1st}>철사</button>
          <button className="product second"
          onClick={change2nd}>철근</button>
          <button className="product third"
          onClick={change3rd}>구리선</button>
          <button className="product fourth"
          onClick={change4th}>니켈선</button>
      </div>
      <div style={{display:first?"block":"none"}} className="infor">
        <a className="buttonCss" href="/product1/item1">첫번째 아이템</a>
        <a className="buttonCss" href="/product1/item2">두번째 아이템</a>
      </div>
      <div style={{display:second?"block":"none"}} className="infor">
        <a className="buttonCss" href="?product=002&item=001">세번째 아이템</a>
        <a className="buttonCss" href="/product1/item2">네번째 아이템</a>
      </div>
      <div style={{display:third?"block":"none"}} className="infor">
        <a className="buttonCss" href="/product1/item1">다섯번째 아이템</a>
        <a className="buttonCss" href="/product1/item2">여섯번째 아이템</a>
      </div>
      <div style={{display:fourth?"block":"none"}} className="infor">
        <a className="buttonCss" href="/product1/item1">일곱번째 아이템</a>
        <a className="buttonCss" href="/product1/item2">여덟번째 아이템</a>
      </div>
    </div>
  );
}
