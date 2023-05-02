import React from "react";
import Main from "../components/Main";
import Infor from "../components/Infor";
import Detail from "../components/Detail";
import Others from "../components/Others";
import '../CSS/home.css'
export default function Home() {
  return (
    <div className="homePage">
      <Main />
      <Infor />
      <Detail />
      <Others />
    </div>
  );
}
