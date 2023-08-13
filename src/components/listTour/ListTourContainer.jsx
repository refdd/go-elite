import React from "react";
import CardListTour from "./CardListTour";
import Image1 from "../../../public/assets/image/tourimage (1).webp";
import Image2 from "../../../public/assets/image/tourimage (2).webp";
import Image3 from "../../../public/assets/image/tourimage (3).webp";
import Image4 from "../../../public/assets/image/tourimage (4).webp";
function ListTourContainer() {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 gap-4">
        <CardListTour imgSrc={Image1} />
        <CardListTour imgSrc={Image2} />
        <CardListTour imgSrc={Image3} />
        <CardListTour imgSrc={Image4} />
        <CardListTour imgSrc={Image1} />
        <CardListTour imgSrc={Image4} />
        <CardListTour imgSrc={Image3} />
        <CardListTour imgSrc={Image2} />
      </div>
    </div>
  );
}

export default ListTourContainer;
