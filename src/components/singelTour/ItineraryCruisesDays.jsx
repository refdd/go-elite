import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ItineraryDays from "./ItineraryDays";

function ItineraryCruisesDays({ itineraries }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setitems] = useState();

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    setitems(itineraries[activeIndex]?.items);
  }, [itineraries, activeIndex]);
  //   console.log(items);
  if (!items) return;
  return (
    <div>
      <div className="flex flex-col ">
        <p className="text-xl text-[#3D3D3D] font-bold">Itinerary</p>
      </div>
      <div className=" mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {itineraries?.map((q, index) => (
            <div key={index} className="">
              <button
                className={`flex  w-full items-center justify-between text-left 
                  gap-2  border border-[#70735d]  py-5 px-3 rounded-lg ${
                    activeIndex === index ? "bg-[#01a8c3]" : "bg-white"
                  }  `}
                onClick={() => handleClick(index)}
              >
                <div className=" flex items-center gap-2">
                  <h2
                    className={` ${
                      activeIndex === index ? "text-white" : "text-[#3d3d3d]"
                    } text-[15px] md:text-lg
                   font-bold font-sans capitalize`}
                  >
                    {q.title}
                  </h2>
                </div>
              </button>
            </div>
          ))}
          <div className="md:col-span-2">
            <ItineraryDays itineraries={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryCruisesDays;
