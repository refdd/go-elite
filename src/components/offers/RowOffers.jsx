import React from "react";
import OffersContainer from "./OffersContainer";

function RowOffers({ packages }) {
  return (
    <div className="bg-[#00145F]">
      <div className="container mx-auto px-4 mt-10">
        <div className=" pt-10 ">
          <p className="text-2xl text-white font-bold font-sans capitalize">
            offers
          </p>
          <OffersContainer packages={packages} />
        </div>
      </div>
    </div>
  );
}

export default RowOffers;
