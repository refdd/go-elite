import React from "react";
import HeaderSection from "../helper/HeaderSection";
import ButtonSeeAll from "../buttons/ButtonSeeAll";
import Link from "next/link";
import dynamic from "next/dynamic";
const AccordionFAQ = dynamic(() => import("./AccordionFAQ"));
function FAQs({ faqs, faq_page }) {
  return (
    <div className="container mx-auto px-4 mt-20 md:px-10">
      {!faq_page && (
        <HeaderSection title={"Frequently Asked Questions"} desc={""} />
      )}

      <AccordionFAQ faqs={faqs} />
      {!faq_page && (
        <Link href={`/faqs`}>
          <ButtonSeeAll title={"View All"} />
        </Link>
      )}
    </div>
  );
}

export default FAQs;
