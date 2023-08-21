import React from "react";

function HeaderSection({ title, desc }) {
  return (
    <div>
      <div className="flex flex-col gap-1 justify-center items-center ">
        <p className="text-lg md:text-xl text-[#3D3D3D] font-bold font-sans capitalize md:text-xl">
          {title}
        </p>
        <p className="text-[#7A7A7A] text-sm md:text-2xl font-normal font-sans capitalize">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default HeaderSection;
