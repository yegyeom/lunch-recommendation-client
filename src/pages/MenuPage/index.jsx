import React from "react";

import RealTimeMenu from "./RealTimeMenu";
import main_img from "../../assets/main_img.png";
import MenuList from "./MenuList";

const MenuPage = () => {
  return (
    <div className="menu-container">
      <div className="menu-recommend-container">
        <img className="main-img" alt="main_img" src={main_img} />
        <MenuList />
      </div>
      <RealTimeMenu />
    </div>
  );
};

export default MenuPage;
