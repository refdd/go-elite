import React from "react";
import { GiMeal } from "react-icons/gi";
import TapsItinerary from "./TapsItinerary";
import ItineraryDays from "./ItineraryDays";

function Itinerary() {
  return (
    <div>
      <div className="flex flex-col gap-5 mt-5">
        <p className="text-xl text-[#3D3D3D] font-bold">Itinerary:</p>
        <div className="flex  gap-3">
          <GiMeal className="text-[#00229E] text-2xl mt-1" />
          <div className="flex flex-col  ">
            <p className="text-lg text-[#3D3D3D] font-bold">Meals:</p>
            <p className="text-lg text-[#3D3D3D] font-normal">
              17 Breakfast, 5 Lunches, 3 dinners
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <TapsItinerary />
        <ItineraryDays />
      </div>
    </div>
  );
}

export default Itinerary;
