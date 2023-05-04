import React from "react";
import { useState } from "react";
let DataContext = React.createContext("");

let DataProvider = ({ children }) => {
  //메인페이지 버튼에 들어갈 옵션들
  let [buttonname,setButtonname]=useState([
    {
      page:"product1",
      productname:"철사",
      itemname:"지름 1cm 미만",
      itempage:"item1"
    },
    {
      page:"product1",
      productname:"철사",
      itemname:"지름 1cm 이상",
      itempage:"item2"
    },
    {
      page:"product2",
      productname:"철근",
      itemname:"지름 1cm 미만2",
      itempage:"item1"
    },
    {
      page:"product2",
      productname:"철근",
      itemname:"지름 1cm 이상2",
      itempage:"item2"
    }
  ])
  /*물건 이름,옵션 이름,가격 */
  let [price, setPrice] = useState([
    {
      id: 0,
      title: "빈 값",
      price: 0,
      name: "철사",
    },
    {
      id: 1,
      title: "기본",
      price: 30000,
      name: "철사",
    },
    {
      id: 2,
      title: "기본+추가옵션1",
      price: 35000,
      name: "철사",
    },
  ]);
  //아이템 화면에서의 구매 수량
  let [count, setCount] = useState();
  //해당 물건의 재고량
  let [stock, setStock] = useState(200);
  //물건 샘플그림들
  let [picture, setPicture] = useState([
    {
      id: 1,
      url: "/image/large1.jpg",
    },
    {
      id: 2,
      url: "/image/large2.jpg",
    },
    {
      id: 3,
      url: "/image/large3.png",
    },
  ]);
  //장바구니에 들어갈 자료들
  let [choiceprice, setChoiceprice] = useState([
    {
      id: 0,
      choice: 0,
      price: 0,
      option: "",
      name: "",
      allprice: 0,
    },
  ]);
  //단일구매에 들어갈 자료들
  let [lastchoice, setLastchoice] = useState({
    id: 0,
    choice: 0,
    price: 0,
    option: "",
    name: "",
    allprice: 0,
  });
  //장바구니의 배열의 id값
  let [id, setId] = useState(0);
  let value = {
    state: { price, count, stock, picture, choiceprice, id, lastchoice,buttonname },
    action: {
      setPrice,
      setCount,
      setStock,
      setPicture,
      setChoiceprice,
      setId,
      setLastchoice,
      setButtonname,
    },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
