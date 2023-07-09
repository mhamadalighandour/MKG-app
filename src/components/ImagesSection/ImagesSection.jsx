import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ImagesSection.css";

const ImagesSection = ({ children }) => {
  return (
    <section className="slider-img w-100">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView="1.5"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1.2,
          },
        }}
        className="swiper_container"
      >
        {children}
      </Swiper>
    </section>
  );
};

export default ImagesSection;
