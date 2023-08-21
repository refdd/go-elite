import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import GuideCard from "./GuideCard";

function GuideContainer({ wikis }) {
  return (
    <div className=" ">
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
        className="guide-container"
      >
        {wikis?.map((wiki) => (
          <SwiperSlide key={wiki?.id}>
            <GuideCard
              imgSrc={wiki?.image?.image_url}
              description={wiki?.short_body}
              title={wiki?.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GuideContainer;
