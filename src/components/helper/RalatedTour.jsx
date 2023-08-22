import React from "react";
import CardTour from "../Tour/CardTour";

function RalatedTour({ packages }) {
  return (
    <div className="md:col-span-2">
      <p className="text-lg md:text-xl text-[#3D3D3D] font-bold text-center font-sans capitalize ">
        RELATED TOURS
      </p>
      <div className="grid grid-cols-1 gap-4 ">
        {packages?.map((tour) => (
          <CardTour
            id={tour.id}
            imgSrc={tour?.image?.image_url}
            title={tour?.destination?.title}
            price={tour?.start_price}
            slug={tour?.slug}
            description={tour?.title?.substring(0, 50)}
            stars={tour?.stars}
            duration={tour?.duration}
            tourType={tour?.tour_type}
            subSlug={tour?.destination?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default RalatedTour;
