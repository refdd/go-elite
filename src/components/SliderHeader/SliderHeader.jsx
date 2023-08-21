import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SingelSlider from "./SingelSlider";
function SliderHeader({ sliders }) {
  return (
    <div className="sliderConteriner">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="myHeaderSlider"
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.id}>
            <SingelSlider
              imgsrc={slider?.image?.image_url}
              title={slider?.title}
              button={slider?.button}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderHeader;
