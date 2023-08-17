import React, { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
function ItineraryDays({ itineraries }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <div className="flex flex-col ">
        <p className="text-base text-[#3D3D3D] font-bold">Itinerary</p>
        <p className="text-sm text-[#3D3D3D] font-normal">Every Friday</p>
      </div>
      <div className=" mt-5">
        <div className="">
          {itineraries?.map((q, index) => (
            <div
              key={q.id}
              className=" border border-[#DDD] mb-8 py-5 px-3 rounded-lg  "
            >
              <button
                className="flex  w-full items-center justify-between text-left   gap-2   "
                onClick={() => handleClick(index)}
              >
                <div className=" flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#00229E] rounded-full flex justify-center items-center">
                    <span className="text-[#fff] font-medium">{index + 1}</span>
                  </div>
                  <h2 className=" text-textColor text-[15px] md:text-lg font-medium font-sans capitalize">
                    {q.title}
                  </h2>
                </div>
                <div className="w-[20%] md:w-[10%] flex items-center justify-center">
                  <MdArrowDropDownCircle
                    className={` text-3xl text-[#00229E]${
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
