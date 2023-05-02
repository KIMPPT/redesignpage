import React from "react";
import "../CSS/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  let navigate = useNavigate();
  return (
    <div className="Footerbox">
      <img src="/image/companylogo.png" alt="회사상표" className="Logo" />
      <div className="writebox">
        <p>회사명 : (주)강철제단</p>
        <p>주소 : 부산광역시 강서구 XXX</p>
        <p>사업자등록번호 : 123-64-34562</p>
        <p>통신판매업신고번호 : 제 2023-부산강서-9999호</p>
        <p>전화번호(문의) : 051-123-5678</p>
        <p>FAx번호 : 051-123-5688</p>
      </div>
      <div className="svgicons">
        <FontAwesomeIcon icon={faEnvelope} size="2xl" className="svgclick" />
        <br />
        <FontAwesomeIcon
          icon={faBlog}
          size="2xl"
          className="svgclick"
          onClick={() => {
            window.open("https://blog.naver.com");
          }}
        />
      </div>
    </div>
  );
}
