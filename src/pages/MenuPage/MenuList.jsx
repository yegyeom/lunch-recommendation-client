import React from "react";
import MenuSwiper from "../../components/MenuSwiper";

const menuTitles = [
  "다른 사람들은 이런 메뉴도 먹었어요",
  "나의 맞춤 메뉴를 확인해보세요",
];

const MenuList = (props) => {
  const { onClickMenu, menuData } = props;
  return (
    <div className="menu-list-container">
      {menuData.map((item, idx) => (
        <MenuSwiper
          menu={item}
          title={menuData.length === 1 ? menuTitles[0] : menuTitles[idx]}
          onClickSlide={onClickMenu}
          key={idx}
        />
      ))}
    </div>
  );
};

export default MenuList;
