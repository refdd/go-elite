import React from "react";
import HeaderSection from "../helper/HeaderSection";
import TourContainer from "./TourContainer";

function RowTour() {
  return (
    <div className="container  mx-auto px-4 mt-10">
      <HeaderSection
        title={"Trip Colection"}
        desc={"Find The Best Offer Sutits Your budget"}
      />
      <TourContainer />
    </div>
  );
}

export default RowTour;
