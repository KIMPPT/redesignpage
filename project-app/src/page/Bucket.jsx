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
            {list.id}/{list.choice}/{list.price}/{list.name}
          </p>
        </div>
      ))}
    </div>
  );
}
