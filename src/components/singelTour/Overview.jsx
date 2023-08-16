import React from "react";
import Included from "./Included";
import Excluded from "./Excluded";

function Overview() {
  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <div className="">
          <p className="text-lg font-medium text-[#3D3D3D] capitalize text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="">
          <div className="w-full h-full ">
            <video
              className=" w-full h-[300px] md:h-[495px] object-cover rounded-3xl"
              src={require("../../../public/assets/video_PgjNKFYS.mp4")}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
      <Included />
      <Excluded />
    </div>
  );
}

export default Overview;
