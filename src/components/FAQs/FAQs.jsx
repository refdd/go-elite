import React from "react";
import HeaderSection from "../helper/HeaderSection";
import AccordionFAQ from "./AccordionFAQ";
import ButtonSeeAll from "../buttons/ButtonSeeAll";

function FAQs({ faqs }) {
  return (
    <div className="container mx-auto px-4 mt-10 md:px-10">
      <HeaderSection title={"FAQs"} desc={""} />
      <AccordionFAQ faqs={faqs} />
      <ButtonSeeAll title={"View All"} />
    </div>
  );
}

export default FAQs;
