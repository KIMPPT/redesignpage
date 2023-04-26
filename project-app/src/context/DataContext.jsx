import React from "react";
import { useState } from "react";
let DataContext = React.createContext("");

let DataProvider = ({ children }) => {
  let [price, setPrice] = useState([
    {
      id:0,
      title:"빈 값",
      price:0,
    },
    {
      id: 1,
      title: "기본",
      price: 30000,
    },
    {
      id: 2,
      title: "기본+추가옵션1",
      price: 35000,
    },
  ]);
  let [count,setCount]=useState();
  let [stock,setStock]=useState(200);
  let [picture,setPicture]=useState(
    [
      {
        id:1,
        url:"/image/large1.jpg"
      },
      {
        id:2,
        url:"/image/large2.jpg"
      },
      {
        id:3,
        url:"/image/large3.png"
      }
    ]
  )
  let [choiceprice,setChoiceprice]=useState(
    [
      {
        id:0,
        choice:0,
        price:0,
        name:"",
        allprice:0,
      }
    ]
  )
  let [lastchoice,setLastchoice]=useState(
    {
      id:0,
      choice:0,
      price:0,
      name:"",
      allprice:0,
    }
  )
  let [id,setId]=useState(0);
  let value={
    state:{price,count,stock,picture,choiceprice,id,lastchoice},
    action:{setPrice,setCount,setStock,setPicture,setChoiceprice,setId,setLastchoice},
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export {DataProvider};
export default DataContext;