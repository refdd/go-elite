import React from "react";
import bg from "../../../public/assets/image/header.webp";
function MainHead() {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-bottom  py-32 md:py-48 mt-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className="text-4xl  md:text-7xl font-sans font-bold text-center capitalize text-white">
            Egypt
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
