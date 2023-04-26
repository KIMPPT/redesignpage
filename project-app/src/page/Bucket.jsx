import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
export default function Bucket() {
  let { state, action } = useContext(DataContext);
  let deletelist = () => {
    let newlist = state.choiceprice.filter((list) => list.id !== 0);
    action.setChoiceprice(newlist);
  };
  return (
    <div>
      {state.choiceprice.map((list, id) => (
        <div key={id}>
          <p>
            {list.id} <br />
            갯수 : {list.choice} <br /> 
            가격 : {list.price} <br /> 
            옵션 : {list.name} <br/>
            최종 가격 : {list.allprice}
          </p>
        </div>
      ))}
    </div>
  );
}
