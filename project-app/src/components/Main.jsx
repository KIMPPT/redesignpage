import React from "react";
import "../CSS/main.css";
import { useState, useContext ,useRef} from "react";
import DataContext from "../context/DataContext";
export default function Main() {
  let { state, action } = useContext(DataContext);
  let [choice, setChoice] = useState(0);
  let [imagenumber, setImagenumber] = useState(1);
  let totalprice =
    Number(state.count) * state.price.find((price) => price.id == choice).price;
  {
    /*배송비를 제외한 총 가격은 구매 수량 *
    옵션의 id 값과 Dataprovider에 저장된 price의 id 값을 비교해
    해당하는 객체의 price 값을 꺼내서 곱해줌  */
  }
  let ref=useRef(null);
  let scrollToRef=()=>{ref.current.scrollIntoView({behavior:"smooth"})}
  return (
    <div className="box" ref={ref}>
      <div>
        <img
          src={`${(state.picture.find((pic)=>pic.id==imagenumber).url)}`}
          //이미지 주소를 작은 이미지를 클릭했을 시 id 값을 받아와 
          //Dataprovide의 큰 이미지 주소가 담긴 id와 비교해
          //일치하는 객체 안의 큰 이미지 주소를 불러냄
          alt="이미지자리입니다"
          className="mainimagelarge"
        />
      </div>
      <div className="nav">
        <img src="/image/100-2.png" alt="작은이미지1입니다" className="wrap"
                  onClick={(e) => setImagenumber(1) }/>
        <img
          src="/image/100.png"
          alt="작은이미지2입니다"
          className="wrap"
          value='2'
          onClick={(e) => setImagenumber(2)
          }
        />
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>물품이름 :</td>
              <td>물품명</td>
            </tr>
            <tr>
              <td>옵션 :</td>
              <td>
                <select
                  name=""
                  id=""
                  onChange={(e) => setChoice(e.target.value)}
                >
                  <option value="">옵션을 선택해주세요</option>
                  <option value="1">기본 : 30000원</option>
                  <option value="2">기본+추가옵션1 : 35000원</option>
                  {/*onchange 함수를 이용해 옵션을 선택에 따라 value 값을 저장함 */}
                </select>
              </td>
            </tr>
            <tr>
              <td>구매 수량 :</td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="0"
                  min={0}
                  onChange={(e) => action.setCount(e.target.value)}
                />
                {/*구매 수량을 실시간으로 변화 시켜줌 */}
              </td>
            </tr>
            <tr>
              <td>배송비 :</td>
              <td>
                N개 미만 : <span id="tax">3000</span> 원 <br />
                N개 이상 : 무료
              </td>
            </tr>
            <tr>
              <td>현재 재고량 :</td>
              <td>
                <span id="exist">200</span>개
              </td>
            </tr>
            <tr>
              <td>최종 가격 :</td>
              <td>
                {(isNaN(totalprice) ? 0 : totalprice) +
                  (totalprice != 0 && state.count < 100 ? 3000 : 0)}
              </td>
              {/*옵션이 정해지고 구매 수량도 0보다 클 때 배송비를 포함한 가격을 출력
              그 외의 경우에는 무조건 0원으로 출력 */}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buy">
        <button
          onClick={() => {
            alert("보관하였습니다");
          }}
        >
          보관하기
        </button>
        <button onClick={() => {}}>
          {state.count > state.stock ? "문의하기" : "구매하기"}
        </button>
      </div>
      <div className="buttons">
        <button
        >물품 설명</button>
        <button
        onClick={scrollToRef}>상세 설명</button>
        <button>관련 물품</button>
      </div>
    </div>
  );
}
