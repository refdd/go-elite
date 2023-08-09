import React from "react";
import HeaderSection from "../helper/HeaderSection";
import GuideContainer from "./GuideContainer";

function RowGuides() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <HeaderSection title={"travel Guide"} desc={""} />
      <GuideContainer />
    </div>
  );
}

export default RowGuides;
