import Image from "next/image";
import React from "react";
import logoFooter from "../../../public/assets/image/witheLogo.png";
function Footer() {
  return (
    <div className=" mt-10 bg-[#00145F]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-7 py-6">
          {/* lgo */}
          <div className="">
            <div className="">
              <Image
                alt="tourImage"
                loading="lazy"
                decoding="async"
                width={200}
                height={90}
                src={logoFooter}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=""
              />
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>Home</span>
              </li>
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>packages</span>
              </li>
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>Nile Cruises</span>
              </li>
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>blogs</span>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-[16px] text-[#fff] font-sans capitalize font-bold pb-3">
              {" "}
              contact us
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>Home</span>
              </li>
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>packages</span>
              </li>
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>Nile Cruises</span>
              </li>
              <li className="text-[16px] text-[#fff] font-sans capitalize ">
                <span>blogs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
