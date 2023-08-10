import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
const questions = [
  {
    id: 1,
    question: "Can I travel safely with confidence to the middle east?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 2,
    question: "45 anos de experiência",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 3,
    question: "Placeholder content for this accordion, which is intended t",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
  {
    id: 4,
    question: "Placeholder content for this accordion, which is intended t",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius nulla eveniet ad, adipisci dignissimos dolores, vel architecto rerum iusto optio laudantium cum quia quae explicabo dolor atque. Facere, temporibus?",
  },
];
function TrustAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="">
      <div className="">
        {questions?.map((q, index) => (
          <div key={q.id} className=" border mb-8 rounded shadow-lg py-5 px-3 ">
            <button
              className="flex  w-full items-center justify-between text-left   gap-2  "
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
              <p className="mt-4 text-base text-gray-500">{q.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustAccordion;
