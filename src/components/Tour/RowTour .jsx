import React from "react";
import HeaderSection from "../helper/HeaderSection";
import TourContainer from "./TourContainer";

function RowTour({ packages }) {
  return (
    <div className="container  mx-auto px-4 mt-10 md:px-10">
      <HeaderSection
        title={"Luxury Adventure Made Just For You"}
        desc={
          "Live a unique experience, choosing the most comfortable vacation"
        }
      />
      <TourContainer packages={packages} />
    </div>
  );
}

export default RowTour;
