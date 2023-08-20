import React from "react";
import HeaderSection from "../helper/HeaderSection";
import DestinationContainer from "./DestinationContainer";

function RowDestination({ destinations }) {
  return (
    <div className="container mx-auto px-4 md:px-10">
      <HeaderSection title={"Most popular destination"} desc={""} />
      <DestinationContainer destinations={destinations} />
    </div>
  );
}

export default RowDestination;
