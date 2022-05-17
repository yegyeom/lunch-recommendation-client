import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img1 from "../../assets/guide_1.png";
import img2 from "../../assets/guide_2.png";
import img3 from "../../assets/guide_3.png";

const GuidePage = () => {
  const items = [img1, img2, img3];

  const slides = items.map((item, idx) => (
    <SwiperSlide key={idx} className="guide-slide">
      <img className="guide-image" alt="guide-img" src={item}></img>
    </SwiperSlide>
  ));

  return (
    <div className="guide-swiper">
      <Swiper
        sliderPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider"
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default GuidePage;
