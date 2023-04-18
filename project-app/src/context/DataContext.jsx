import React from "react";
import { useState } from "react";
let DataContext = React.createContext("");

let DataProvider = ({ children }) => {
  let [price, setPrice] = useState([
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
  let value={
    state:{price},
    action:{setPrice},
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export {DataProvider};
export default DataContext;