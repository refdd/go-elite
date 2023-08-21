import React from "react";
import ItineraryCruisesDays from "./ItineraryCruisesDays";

function ItineraryCruises({ itineraries }) {
  return (
    <div>
      <div className="flex flex-col gap-5 mt-5"></div>
      <div className=" flex flex-col gap-4">
        {/* <TapsItinerary /> */}
        <ItineraryCruisesDays itineraries={itineraries} />
      </div>
    </div>
  );
}

export default ItineraryCruises;
