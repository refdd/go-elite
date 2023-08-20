import React from "react";
import CardDestination from "./CardDestination";

function DestinationContainer({ destinations }) {
  return (
    <div className="">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 ">
        {destinations?.map((destination) => (
          <div className="" key={destination?.id}>
            <CardDestination
              imgSrc={destination.image?.image_url}
              country={destination?.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationContainer;
