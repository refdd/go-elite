import React from "react";
import HeaderSection from "../helper/HeaderSection";
import DestinationContainer from "./DestinationContainer";

function RowDestination({ destinations }) {
  return (
    <div className="container mx-auto px-4  mt-16">
      <HeaderSection
        title={"Go Elite to the Most Popular Destinations"}
        desc={
          "Live a unique experience, choosing the most comfortable vacation"
        }
      />
      <DestinationContainer destinations={destinations} />
    </div>
  );
}

export default RowDestination;
