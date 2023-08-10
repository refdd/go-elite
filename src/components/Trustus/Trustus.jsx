import React from "react";
import HeaderSection from "../helper/HeaderSection";
import Image from "next/image";
import trustUsImage from "../../../public/assets/image/contactus.webp";
import TrustAccordion from "./TrustAccordion";
function Trustus() {
  return (
    <div className="  mt-10">
      <div className="container mx-auto px-4">
        <HeaderSection title={"Why Trust Us "} desc={""} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 ">
        <div className="px-4 md:px-0">
          <div className="relative w-full h-[220px] md:h-full ">
            <Image
              alt="tourImage"
              loading="lazy"
              decoding="async"
              fill
              quality={75}
              placeholder="blur"
              src={trustUsImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-r-[32px] object-cover"
            />
          </div>
        </div>
        <div className="md:px-10">
          <TrustAccordion />
        </div>
      </div>
    </div>
  );
}

export default Trustus;
