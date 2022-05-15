import React from "react";
import Temp from "../../assets/temp.jpeg";

const menuItems = [
  { id: 1, src: Temp, name: "떡볶이" },
  { id: 2, src: Temp, name: "마라탕" },
  { id: 3, src: Temp, name: "갈비탕" },
  { id: 4, src: Temp, name: "삼겹살" },
  { id: 5, src: Temp, name: "쌀국수" },
  { id: 6, src: Temp, name: "찜닭" },
  { id: 7, src: Temp, name: "치킨버거" },
  { id: 8, src: Temp, name: "안심돈까스" },
  { id: 9, src: Temp, name: "냉모밀" },
  { id: 10, src: Temp, name: "버섯김밥" },
];

const RealTimeMenu = ({ onClickMenu }) => {
  const menuList = menuItems.map((item, idx) => (
    <div
      className="real-time-menu"
      key={idx}
      onClick={() => {
        onClickMenu(item);
      }}
    >
      {`${idx + 1}. ${item.name}`}
    </div>
  ));

  return (
    <>
      <div className="real-time-container">
        <h3>실시간 인기메뉴</h3>
        <span>현 시각 가장 많이 선택된 메뉴예요!</span>
        <div className="real-time-box">{menuList}</div>
      </div>
    </>
  );
};

export default RealTimeMenu;
