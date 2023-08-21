import React from "react";
import HeaderSection from "../helper/HeaderSection";
import TourContainer from "./TourContainer";
import TailormakeCard from "./TailormakeCard";

function RowTour({ packages }) {
  return (
    <div className="container  mx-auto px-4 mt-10 md:px-10">
      <HeaderSection
        title={"Luxury Adventure Made Just For You"}
        desc={
          "Live a unique experience, choosing the most comfortable vacation"
        }
      />
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 ">
        <div className="tour md:col-span-1 hidden md:block">
          <TailormakeCard />
        </div>
        <TourContainer packages={packages} />
      </div>
    </div>
  );
}

export default RowTour;
