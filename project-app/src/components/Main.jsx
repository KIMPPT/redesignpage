import React, { useRef } from "react";
import "../CSS/main.css";
import { useState, useContext, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
export default function Main(props) {
  let { state, action } = useContext(DataContext);
  let [choice, setChoice] = useState(0);
  let [imagenumber, setImagenumber] = useState(1);
  let navigate = useNavigate();
  /*배송비를 제외한 총 가격은 구매 수량 *
    옵션의 id 값과 Dataprovider에 저장된 price의 id 값을 비교해
    해당하는 객체의 price 값을 꺼내서 곱해줌  */
  let totalprice =
    Number(state.count) *
    state.price.find((price) => price.id === Number(choice)).price;
  /*최종 가격이 NaN이라고 뜨는 것을 방지하기 위해 NaN이면 0으로 표시 */
  let finalprice = isNaN(totalprice) ? 0 : totalprice;

  // 단일구매와 보관하기 버튼 클릭 시 만들 배열-공통이라서 밖으로 빼놓음
  let newinfor = {
    name: state.price[choice].name,
    id: state.id + 1,
    option: state.price[choice].title,
    choice: state.count,
    price: state.price[choice].price,
    allprice: finalprice,
  };
  //단일 구매 버튼 클릭 시 동작할 함수
  let cashbutton = () => {
    action.setId(state.id + 1);
    //단일구매이므로 바로 바꿈
    action.setLastchoice(newinfor);
    alert("단일 구매 페이지로 이동합니다");
    navigate("/cash");
  };
  //보관하기 버튼을 누를 시 동작할 함수
  let addinfor = () => {
    action.setId(state.id + 1);
    //concat으로 더미 다음에 객체 추가
    let newaddinfor = state.choiceprice.concat(newinfor);
    //더미값인 0번째 배열을 뺀 나머지 배열만 만들기
    let deleteinfor = newaddinfor.filter((list) => list.id !== 0);
    action.setChoiceprice(deleteinfor);
    alert("보관함 페이지로 이동합니다");
    navigate("/bucket");
  };
  //top버튼을 누를 때 동작할 함수
  let topRef = useRef(null);
  let onTopRef = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  /*
  스크롤 값 가져오기 메서드인데 쓰지 않아서 주석처리
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  console.log(position);
*/
  //구매량이 재고량보다 많을 때 띄워줄 경고문 함수
  let overalarm = () => {
    alert(
      `재고량보다 많은 수량을 입력했습니다.
제품을 구매하고 싶으시다면 123-5678로 문의해주시면 답변을 해 드리겠습니다`
    );
  };
  //보관이나 구매 전 페이지를 옮겼다면 갯수 초기화. 옵션부분은 자동으로 초기화 됨
  useEffect(() => {
    action.setCount(0);
  }, []);
  return (
    <div className="box" ref={topRef}>
      {/*ref로 top 버튼이 돌아올 위치를 잡아줌 */}
      <img
        src={`${
          state.picture.find((pic) => Number(pic.id) === imagenumber).url
        }`}
        //이미지 주소를 작은 이미지를 클릭했을 시 id 값을 받아와
        //Dataprovide의 큰 이미지 주소가 담긴 id와 비교해
        //일치하는 객체 안의 큰 이미지 주소를 불러냄
        alt="이미지자리입니다"
        className="mainimagelarge"
      />
      <div className="nav">
        <img
          src="/image/small1.jpg"
          alt="작은이미지1입니다"
          className="wrap"
          onClick={(e) => setImagenumber(1)}
        />
        <img
          src="/image/small2.jpg"
          alt="작은이미지2입니다"
          className="wrap"
          onClick={(e) => setImagenumber(2)}
        />
        <img
          src="/image/small3.png"
          alt="작은이미지3입니다"
          className="wrap"
          onClick={(e) => setImagenumber(3)}
        />
      </div>
      <table className={"maintable"}>
        <tbody>
          <tr>
            <td>물품이름 :</td>
            <td>{state.price[0].name}</td>
          </tr>
          <tr>
            <td>옵션 :</td>
            {/*select 태그로 선택하는 것을 만들어줌 */}
            <td>
              {/*onchange 함수를 이용해 옵션을 선택에 따라 value 값을 저장함 */}
              <select onChange={(e) => setChoice(e.target.value)}>
                <option value="0">옵션을 선택해주세요</option>
                <option value="1">기본 : 30000원</option>
                <option value="2">기본+추가옵션1 : 35000원</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>구매 수량 :</td>
            <td>
              <input
                type="number"
                placeholder="0"
                min={0}
                //구매 수량을 실시간으로 변화 시켜줌
                onChange={(e) => action.setCount(e.target.value)}
                //옵션을 기존으로 돌리면 구매 수량을 수정 못하게 하기
                disabled={Number(choice) === 0 ? true : false}
              />
            </td>
          </tr>
          <tr>
            <td>배송비 :</td>
            <td>
              100개 미만 : 3000원 <br />
              100개 이상 : 무료
            </td>
          </tr>
          <tr>
            <td>현재 재고량 :</td>
            <td>{state.stock}개</td>
          </tr>
          <tr>
            <td>최종 가격 :</td>
            <td>{finalprice.toLocaleString()}원</td>
            {/*toLocaleString() : 숫자 금액 단위 표시를 해줌 */}
          </tr>
        </tbody>
      </table>
      <div className="buy">
        <button
          //클릭 시 최종 가격이 0원이면 알림창으로 옵션과수량 선택을 표시해줌
          onClick={() => {
            finalprice !== 0
              ? state.count > state.stock
                ? overalarm()
                : addinfor()
              : alert("옵션과수량을 선택해주세요");
          }}
          className="existbutton"
        >
          보관하기
        </button>
        <button
          className="buybutton"
          /*
          첫번째로 0원인지 아닌지 판별한 후-옵션이나구매수량이 0인 경우
          구매 수량이 재고량보다 많으면 문의전화 띄우기
          */
          onClick={() => {
            finalprice !== 0
              ? state.count > state.stock
                ? overalarm()
                : cashbutton()
              : alert("옵션과수량을 선택해주세요");
          }}
        >
          {/*버튼의 글자도 변경되게 설정 */}
          {state.count > state.stock ? "문의하기" : "구매하기"}
        </button>
      </div>
      <div className="buttons">
        {/*react-scroll를 이용하기 위해 ScrollLink 컴포넌트를 썼다 */}
        <ScrollLink to="1" spy={true} smooth={true}>
          <button className="moreinfor">물품 설명</button>
        </ScrollLink>
        <ScrollLink to="2" spy={true} smooth={true}>
          <button className="moreinfor">상세 설명</button>
        </ScrollLink>
        <ScrollLink to="3" spy={true} smooth={true}>
          <button className="moreinfor">관련 물품</button>
        </ScrollLink>
      </div>
      <button className="topbutton" onClick={onTopRef}>
        top
      </button>
      {/*console.log(window.scrollY)*/}
    </div>
  );
}
