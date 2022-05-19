import React from "react";
import MenuSwiper from "../../components/MenuSwiper";

const menuTitles = [
  "나의 맞춤 메뉴를 확인해보세요",
  "다른 사람들은 이런 메뉴도 먹었어요",
];

const MenuList = (props) => {
  const { onClickMenu, menuData } = props;

  menuData.length === 2 &&
    ([menuData[1], menuData[0]] = [menuData[0], menuData[1]]);

  return (
    <div className="menu-list-container">
      {menuData.map((item, idx) => (
        <MenuSwiper
          menu={item}
          title={menuData.length === 1 ? menuTitles[1] : menuTitles[idx]}
          onClickSlide={onClickMenu}
          key={idx}
        />
      ))}
    </div>
  );
};

export default MenuList;
