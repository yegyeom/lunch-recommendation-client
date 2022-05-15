import React from "react";
import Temp from "../../assets/temp.jpeg";
import MenuSwiper from "../../components/MenuSwiper";

const menuItems = [
  {
    title: "화창한 오늘, 이런 메뉴 어때요?",
    info: [
      { id: 1, src: Temp, name: "떡볶이" },
      { id: 2, src: Temp, name: "쌀국수" },
      { id: 3, src: Temp, name: "마라샹궈" },
      { id: 4, src: Temp, name: "초밥" },
      { id: 5, src: Temp, name: "스테이크덮밥" },
    ],
  },
  {
    title: "비오는 오늘, 이런 메뉴 어때요?",
    info: [
      { id: 1, src: Temp, name: "떡볶이" },
      { id: 2, src: Temp, name: "쌀국수" },
      { id: 3, src: Temp, name: "마라샹궈" },
      { id: 4, src: Temp, name: "초밥" },
      { id: 5, src: Temp, name: "스테이크덮밥" },
    ],
  },
  {
    title: "여름 밤, 이런 메뉴 어때요?",
    info: [
      { id: 1, src: Temp, name: "떡볶이" },
      { id: 2, src: Temp, name: "쌀국수" },
      { id: 3, src: Temp, name: "마라샹궈" },
      { id: 4, src: Temp, name: "초밥" },
      { id: 5, src: Temp, name: "스테이크덮밥" },
    ],
  },
  {
    title: "다른 사람들은 이런 메뉴도 먹었어요",
    info: [
      { id: 1, src: Temp, name: "낙곱새" },
      { id: 2, src: Temp, name: "마라탕" },
      { id: 3, src: Temp, name: "샌드위치" },
      { id: 4, src: Temp, name: "샐러드" },
      { id: 5, src: Temp, name: "파스타" },
    ],
  },
];

const MenuList = ({onClickMenu}) => {
  return (
    <div className="menu-list-container">
      {menuItems.map((item) => (
        <MenuSwiper menu={item} onClickSlide={onClickMenu} />
      ))}
    </div>
  );
};

export default MenuList;
