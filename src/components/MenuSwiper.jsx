import React from "react";
import Slider from "./Slider";

const MenuSwiper = ({ menu, onClickSlide}) => {
  return (
    <div className="menu-swiper">
      <span className="menu-title">{menu.title}</span>
      <Slider items={menu.info} onClickSlide={onClickSlide}></Slider>
    </div>
  );
};

export default MenuSwiper;
