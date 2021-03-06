import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/slider.css";

const Slider = ({ items, onClickSlide }) => {
  const slides = items.map((item) => (
    <SwiperSlide key={item.food_id} onClick={() => onClickSlide(item)}>
      <div className="slide">
        <img className="slide-image" src={item.image} alt="음식 이미지"></img>
        <span>{item.food_name}</span>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider"
      >
        {slides}
      </Swiper>
    </>
  );
};

export default Slider;
