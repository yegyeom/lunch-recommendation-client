import React from "react";
import Slider from "./Slider";

const MenuSwiper = ({ menu }) => {
  return (
    <div className="menu-swiper">
      <span className="menu-title">{menu.title}</span>
      <Slider items={menu.info}></Slider>
    </div>
  );
};

export default MenuSwiper;
