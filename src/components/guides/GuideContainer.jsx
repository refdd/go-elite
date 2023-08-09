import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../public/assets/image/tourimage (2).webp";
import GuideCard from "./GuideCard";

function GuideContainer() {
  return (
    <div className="mt-5 ">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="guide-container"
      >
        <SwiperSlide>
          <GuideCard imgSrc={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <GuideCard imgSrc={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <GuideCard imgSrc={image1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default GuideContainer;
