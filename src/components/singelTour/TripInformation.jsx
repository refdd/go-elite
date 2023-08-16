import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
const questions = [
  {
    id: 1,
    question: "Prices",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 2,
    question: "Children Policy",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 3,
    question: "Booking Policy",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 4,
    question: "Tipping",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 4,
    question: "Cancelation Policy",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
];

function TripInformation() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="mt-5">
      <div className="">
        {questions?.map((q, index) => (
          <div
            key={q.id}
            className=" border mb-8  shadow-lg py-5 px-3 rounded-lg border-r-[4px] border-b-[4px]  "
          >
            <button
              className="flex  w-full items-center justify-between text-left   gap-2   "
              onClick={() => handleClick(index)}
            >
              <h2 className=" text-textColor text-[15px] md:text-lg font-medium font-sans capitalize">
                {q.question}
              </h2>
              <div className="w-[20%] md:w-[10%] flex items-center justify-center">
                <LiaAngleDownSolid
                  className={activeIndex === index ? "rotate-180" : ""}
                />
              </div>
            </button>
            {activeIndex === index && (
              <div
                dangerouslySetInnerHTML={{
                  __html: q.answer,
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

export default TripInformation;
