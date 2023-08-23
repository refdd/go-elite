import React from "react";
import HeaderSection from "../helper/HeaderSection";
import GuideContainer from "./GuideContainer";
import ButtonSeeAll from "../buttons/ButtonSeeAll";
import Link from "next/link";

function RowGuides({ wikis }) {
  return (
    <div className="container mx-auto px-4 mt-20 ">
      <HeaderSection
        title={"TRAVEL GUIDE"}
        desc={"The Best Way to Discover the Secrets of the World"}
      />
      <GuideContainer wikis={wikis} />
      <div className=" flex justify-end">
        <ButtonSeeAll title={"See more"} path={"faqstravel-guide"} />
      </div>
    </div>
  );
}

export default RowGuides;
