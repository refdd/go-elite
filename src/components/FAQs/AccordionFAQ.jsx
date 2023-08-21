import React, { useState } from "react";

function AccordionFAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="mt-5">
      <div className="">
        {faqs?.map((q, index) => (
          <div
            key={q.id}
            className="  mb-8 bg-[#f5f5f5]  py-5 px-3 rounded-lg   "
          >
            <button
              className="flex  w-full items-center justify-between text-left   gap-2   "
              onClick={() => handleClick(index)}
            >
              <h2 className=" text-textColor text-[15px] md:text-lg font-medium font-sans capitalize">
                {q.title}
              </h2>
              <div className="w-[20%] md:w-[10%] flex items-center justify-center"></div>
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
  );
}

export default AccordionFAQ;
