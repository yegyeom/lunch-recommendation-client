import React from "react";
import Slider from "./Slider";

const MenuSwiper = ({ menu, title, onClickSlide }) => {
  return (
    <div className="menu-swiper">
      <span className="menu-title">{title}</span>
      <Slider items={menu} onClickSlide={onClickSlide}></Slider>
    </div>
  );
};

export default MenuSwiper;
