import React from "react";
import Temp from "../../assets/temp.jpeg";
import MenuSwiper from "../../components/MenuSwiper";

const menuItems = [
  {
    title: "화창한 오늘, 이런 메뉴 어때요?",
    info: [
      { id: 671, src: Temp, name: "떡볶이" },
      { id: 562, src: Temp, name: "쌀국수" },
      { id: 8563, src: Temp, name: "마라샹궈" },
      { id: 4567, src: Temp, name: "초밥" },
      { id: 55753, src: Temp, name: "스테이크덮밥" },
    ],
  },
  {
    title: "비오는 오늘, 이런 메뉴 어때요?",
    info: [
      { id: 1461, src: Temp, name: "떡볶이" },
      { id: 222, src: Temp, name: "쌀국수" },
      { id: 313, src: Temp, name: "마라샹궈" },
      { id: 144, src: Temp, name: "초밥" },
      { id: 54555, src: Temp, name: "스테이크덮밥" },
    ],
  },
  {
    title: "여름 밤, 이런 메뉴 어때요?",
    info: [
      { id: 447451, src: Temp, name: "떡볶이" },
      { id: 425472, src: Temp, name: "쌀국수" },
      { id: 42573, src: Temp, name: "마라샹궈" },
      { id: 4544524, src: Temp, name: "초밥" },
      { id: 554784, src: Temp, name: "스테이크덮밥" },
    ],
  },
  {
    title: "다른 사람들은 이런 메뉴도 먹었어요",
    info: [
      { id: 72841, src: Temp, name: "낙곱새" },
      { id: 2872, src: Temp, name: "마라탕" },
      { id: 7283, src: Temp, name: "샌드위치" },
      { id: 4887, src: Temp, name: "샐러드" },
      { id: 72885, src: Temp, name: "파스타" },
    ],
  },
];

const MenuList = ({onClickMenu}) => {
  return (
    <div className="menu-list-container">
      {menuItems.map((item, idx) => (
        <MenuSwiper menu={item} onClickSlide={onClickMenu} key={idx}/>
      ))}
    </div>
  );
};

export default MenuList;
