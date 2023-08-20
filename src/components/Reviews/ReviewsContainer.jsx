import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardReviews from "./CardReviews";

function ReviewsContainer({ allReviews }) {
  return (
    <div className=" mt-5">
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
        {allReviews?.map((item) => (
          <SwiperSlide key={item.id}>
            {" "}
            <CardReviews
              imgSrc={item?.image?.image_url}
              title={item?.title}
              name={item?.name}
              palce={item?.place}
              stars={item?.stars}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsContainer;
