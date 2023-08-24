import React from "react";
import bg from "../../../public/assets/image/header.webp";
function MainHead({ imgsrc, title }) {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${imgsrc ? imgsrc : bg.src})` }}
        className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-center  h-[400px] md:h-[550px]  mt-10"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className="text-4xl  md:text-7xl font-sans font-bold text-center capitalize text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
