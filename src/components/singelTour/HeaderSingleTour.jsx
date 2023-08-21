import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingelGallery from "./SingelGallery";
function HeaderSingleTour({ title, Duration, reating, galleries, image }) {
  return (
    <div>
      {!galleries.length == 0 ? (
        <Swiper className="singelSlider">
          {galleries?.map((galler, index) => (
            <SwiperSlide key={index}>
              <SingelGallery
                imgsrc={galler?.image_url}
                reating={reating}
                Duration={Duration}
                title={title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SingelGallery
          imgsrc={image?.image_url}
          reating={reating}
          Duration={Duration}
          title={title}
        />
      )}
    </div>
  );
}

export default HeaderSingleTour;
