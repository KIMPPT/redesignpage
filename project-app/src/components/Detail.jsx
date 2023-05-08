import React from "react";
import "../CSS/detail.css";
export default function Detail() {
  return (
    <div id="2">
      <h1>물품 상세 정보</h1>
      <img
        src={process.env.PUBLIC_URL+"/image/detail.png"}
        alt="상세이미지입니다"
        className="detailimage"
      />
      <h1>교환 및 환불에 대한 안내</h1>
      <ol>
        <li>
          구입 후 일주일 내에 제품에 하자가 발생 시에는 무상으로 교환이나 환불을
          해 드립니다
        </li>
        <li>
          일주일이 지나고 한달 이내에 발생하는 불량이나 하자의 경우 유상으로
          제품을 교환을 해 드리고 교환 후 다시 일주일 이내에 똑같은 현상이 발생한다면 무상으로 교환이나
          환불을 해 드립니다
        </li>
        <li>
          구입 후 한달 이후의 불량이나 하자, 또는 일주일 내의 단순 변심에 의한
          교환 및 환불은 불가능합니다
        </li>
        <li>
          무상의 경우 회사측에게 택배비를 부담하셔도 되지만, 유상의 경우
          회사측에게 택배비를 부담하는 경우 수리비에 착불로 보낸 택배비가
          추가됩니다
        </li>
        <li>
          택배를 보내실 때 위치를 <span className="textbold">도로명 주소</span>
          로 적어주시길 바랍니다
        </li>
        <li>그 외의 경우에 대해서는 하단의 전화번호로 연락을 주시면 답변을 해 드리겠습니다</li>
      </ol>
    </div>
  );
}
