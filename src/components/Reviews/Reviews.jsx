import React from "react";
import HeaderSection from "../helper/HeaderSection";
import ReviewsContainer from "./ReviewsContainer";

function Reviews({ allReviews }) {
  return (
    <div className="container mx-auto px-4 mt-10">
      <HeaderSection
        title={"RECENT REVIEWS"}
        desc={"What people say about us"}
      />
      <ReviewsContainer allReviews={allReviews} />
    </div>
  );
}

export default Reviews;
