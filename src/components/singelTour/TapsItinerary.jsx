import React, { useState } from "react";
const days = [
  "6 Days Luxor/Aswan - Every Monday",
  "5 Days Aswan/Luxor - Every Friday",
];
function TapsItinerary() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="mt-5">
      <ul className="flex flex-col gap-3 md:flex-row ">
        {days?.map((day, i) => (
          <li
            key={i}
            onClick={() => handleClick(i)}
            className={`border py-3 px-6  border-[#70735D] cursor-pointer ${
              activeIndex == i ? "bg-[#01a8c3]" : "bg-white"
            }  `}
          >
            <span
              className={`text-base md:text-lg font-bold  ${
                activeIndex == i ? "text-[#fff]" : "text-[#3D3D3D]"
              }  `}
            >
              {day}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TapsItinerary;
