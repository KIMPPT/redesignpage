import React from "react";
import "../CSS/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faBlog } from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
  return (
    <div className="Footerbox">
      <img src="/image/companylogo.png" alt="회사상표" className="Logo" />
      <div className="writebox">
        <p>회사명</p>
        <p>주소</p>
        <p>사업자등록번호</p>
        <p>통신판매업신고번호</p>
        <p>전화번호(문의)</p>
        <p>FAx 전화번호</p>
      </div>
      <div className="svgicons">
        <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
        <br />
        <FontAwesomeIcon icon={faBlog} size='2xl'/>

      </div>
    </div>
  );
}
