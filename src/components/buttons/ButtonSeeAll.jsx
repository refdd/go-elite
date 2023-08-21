import React from "react";

function ButtonSeeAll({ title }) {
  return (
    <div
      className={`bg-[#01a8c3] w-44 h-12 rounded-md  flex   justify-center items-center`}
    >
      <button className="text-white text-base font-medium capitalize">
        {title}
      </button>
    </div>
  );
}

export default ButtonSeeAll;
