import React from "react";
import HeaderSection from "../helper/HeaderSection";
import ButtonSeeAll from "../buttons/ButtonSeeAll";

import dynamic from "next/dynamic";
const AccordionFAQ = dynamic(() => import("./AccordionFAQ"));
function FAQs({ faqs, faq_page }) {
  return (
    <div className="container mx-auto px-4 mt-20 ">
      {!faq_page && (
        <HeaderSection title={"Frequently Asked Questions"} desc={""} />
      )}

      <AccordionFAQ faqs={faqs} />
      {!faq_page && <ButtonSeeAll title={"View All"} path={"faqs"} />}
    </div>
  );
}

export default FAQs;
