import React from "react";
import "../CSS/realmainpage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AutoPlayMethods from "../components/AutoPlayMethods";
export default function Realmainpage() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="realmainPage">
      <h1>(주)강철제단 물건 판매 페이지입니다</h1>
      <h2>Auto Play</h2>
      <Slider {...settings}>
        <div>
          <img src="/image/mainimage1.jpg" alt="" className="trackimage" />
        </div>
        <div>
          <img src="/image/mainimage2.jpg" alt="" className="trackimage" />
        </div>
      </Slider>
    </div>
  );
}
