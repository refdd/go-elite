import React from "react";
import CardListTour from "./CardListTour";
import Image1 from "../../../public/assets/image/tourimage (1).webp";
function ListTourContainer() {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 gap-4">
        <CardListTour imgSrc={Image1} />
      </div>
    </div>
  );
}

export default ListTourContainer;
