import React from "react";
import HeaderSection from "../helper/HeaderSection";
import DestinationContainer from "./DestinationContainer";

function RowDestination() {
  return (
    <div className="container mx-auto px-4">
      <HeaderSection title={"Most popular destination"} desc={""} />
      <DestinationContainer />
    </div>
  );
}

export default RowDestination;