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
  let [movego,setMoveto]=useState();
  let [picture,setPicture]=useState(
    [
      {
        id:1,
        url:"/image/300.png"
      },
      {
        id:2,
        url:"/image/300-1.png"
      }
    ]
  )
  let value={
    state:{price,count,stock,picture},
    action:{setPrice,setCount,setStock,setPicture},
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export {DataProvider};
export default DataContext;