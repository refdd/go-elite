import React from "react";
import CardListTour from "./CardListTour";
function ListTourContainer({ packages, cruisesSlug }) {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 gap-4 md:gap-7">
        {packages?.map((tour) => (
          <CardListTour
            key={tour.id}
            imgSrc={tour?.image?.image_url}
            title={tour?.title}
            description={tour?.short_body}
            stars={tour?.stars}
            duration={tour?.duration}
            slug={tour?.slug}
            price={tour?.start_price}
            tour_type={tour?.tour_type}
            supSlug={
              tour?.destination?.slug ? tour?.destination?.slug : cruisesSlug
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ListTourContainer;
