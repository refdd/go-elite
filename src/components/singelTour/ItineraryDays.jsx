import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
function ItineraryDays({ itineraries }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <div className="flex flex-col ">
        <p className="text-xl text-[#3D3D3D] font-bold">Itinerary</p>
      </div>
      <div className=" mt-5">
        <div className=" flex flex-col gap-5">
          {itineraries?.map((q, index) => (
            <div key={index} className="  flex items-center gap-3   ">
              <div className="w-12 h-12 mx-3 bg-[#01a8c3] rounded-full flex justify-center items-center">
                <span className="text-[#fff] font-medium">{index + 1}</span>
              </div>
              <button
                className="flex  w-full items-center justify-between text-left   gap-2  border border-[#DDD]  py-5 px-3 rounded-lg  "
                onClick={() => handleClick(index)}
              >
                <div className=" flex items-center gap-2">
                  <h2 className=" text-textColor text-[15px] md:text-lg font-medium font-sans capitalize">
                    {q.title}
                  </h2>
                </div>
                <div className="w-[20%] md:w-[10%] flex items-center justify-center">
                  <MdKeyboardArrowDown
                    className={` text-3xl text-[#3d3d3d] ${
                      activeIndex === index ? "rotate-180" : " rotate-0"
                    } `}
                  />
                </div>
              </button>
              {activeIndex === index && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: q.body,
                  }}
                  className="mt-4 text-base text-gray-500"
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItineraryDays;
