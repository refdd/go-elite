import React from "react";
import HeaderSection from "../helper/HeaderSection";
import AccordionFAQ from "./AccordionFAQ";

function FAQs({ faqs }) {
  return (
    <div className="container mx-auto px-4 mt-10">
      <HeaderSection title={"FAQs"} desc={""} />
      <AccordionFAQ faqs={faqs} />
    </div>
  );
}

export default FAQs;
