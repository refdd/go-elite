import React from "react";
import Included from "./Included";
import Excluded from "./Excluded";

function Overview({ desc, inclusion, exclusion }) {
  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <div className="">
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
            className="text-lg font-medium text-[#3D3D3D] capitalize text-justify"
          ></div>
        </div>
        {/* <div className="">
          <div className="w-full h-full ">
            <video
              className=" w-full h-[300px] md:h-[495px] object-cover rounded-3xl"
              src={require("../../../public/assets/video_PgjNKFYS.mp4")}
              autoPlay
              loop
              muted
            />
          </div>
        </div> */}
      </div>
      <Included inclusion={inclusion} />
      <Excluded exclusion={exclusion} />
    </div>
  );
}

export default Overview;
