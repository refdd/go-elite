import React from "react";
import ItineraryDays from "./ItineraryDays";

function Itinerary({ itineraries }) {
  return (
    <div>
      <div className="flex flex-col gap-5 mt-5"></div>
      <div className=" flex flex-col gap-4">
        {/* <TapsItinerary /> */}
        <ItineraryDays itineraries={itineraries} />
      </div>
    </div>
  );
}

export default Itinerary;
