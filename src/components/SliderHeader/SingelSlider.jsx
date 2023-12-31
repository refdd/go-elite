import Image from "next/image";
import React, { useEffect, useState } from "react";

function SingelSlider({ imgsrc, title, button }) {
  const [isMobileView, setIsMobileView] = useState(false);
  const checkMobileView = () => {
    const mobileViewWidth = 768; // You can adjust this threshold according to your design
    setIsMobileView(window.innerWidth < mobileViewWidth);
  };

  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  const modifiedImageUrl = imgsrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,e_improve,h_530/"
  );
  return (
    <div
      style={{
        background: !isMobileView && `url(${modifiedImageUrl})`,
        backgroundRepeat: "no-repeat",
      }}
      className={
        isMobileView
          ? "relative w-full h-[230px]  md:h-[530px]"
          : "relative overflow-hidden   w-full   !bg-cover !bg-center  h-[230px] md:h-[530px]  mt-10"
      }
    >
      {isMobileView && (
        <Image
          alt="tourImage"
          src={modifiedImageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={60}
          placeholder="blur"
          blurDataURL={modifiedImageUrl}
          className=" object-cover"
        />
      )}
      <div className="absolute top-0 left-0 bg-[#00000033] w-full h-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-6 md:gap-10">
          <p className="text-xl md:text-[2.5rem] font-bold capitalize text-white">
            {title}
          </p>
          {button && (
            <div className=" flex justify-center items-center">
              <div className="py-[18px] px-6 w-fit flex justify-center items-center bg-[#01a8c3] rounded-[5px]">
                <button className="text-white text-sm md:text-lg capitalize">
                  view tour
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingelSlider;
