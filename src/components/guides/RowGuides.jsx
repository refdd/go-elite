import React from "react";
import HeaderSection from "../helper/HeaderSection";
import GuideContainer from "./GuideContainer";
import ButtonSeeAll from "../buttons/ButtonSeeAll";

function RowGuides({ wikis }) {
  return (
    <div className="container mx-auto px-4 mt-10 md:px-10">
      <HeaderSection
        title={"TRAVEL GUIDE"}
        desc={"The Best Way to Discover the Secrets of the World"}
      />
      <GuideContainer wikis={wikis} />
      <div className=" flex justify-end">
        <ButtonSeeAll title={"See All"} />
      </div>
    </div>
  );
}

export default RowGuides;
