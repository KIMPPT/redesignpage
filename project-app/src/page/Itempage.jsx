import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../CSS/itempage.css";
export default function Itempage() {
  let navigate = useNavigate();
  let params = useParams();
  let { list } = useParams();
  let { state } = useContext(DataContext);
  let buttonnamearray = state.buttonname;
  let correctarray = buttonnamearray.filter((name) => name.page === list);
  //console.log(correctarray);
  return (
    <div className="itempageList">
      {/*
      <button className="buttonCss" onClick={() => navigate(`item1`)}>
        {correctarray[0].itemname}
      </button>
      <button className="buttonCss" onClick={() => navigate(`item2`)}>
        {correctarray[1].itemname}
      </button>
        */}
      {correctarray.map((product, id) => (
        <button
          key={id}
          className="buttonCss"
          onClick={() => navigate(`/${product.page}/${product.itempage}`)}
        >
          {product.productname}-{product.itemname}
        </button>
      ))}
    </div>
  );
}
