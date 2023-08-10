import React from "react";

function HeaderVideo() {
  return (
    <header className="relative">
      <div>
        <div className="w-full h-full ">
          <video
            className=" w-full h-[400px] object-cover"
            src={require("../../../public/assets/video_PgjNKFYS.mp4")}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[##0000005e]  ">
          {" "}
        </div>
      </div>
    </header>
  );
}

export default HeaderVideo;
