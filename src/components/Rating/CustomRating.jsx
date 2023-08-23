import React from "react";
import Rating from "@mui/material/Rating";

function CustomRating({ value }) {
  return (
    <Rating
      name="read-only"
      value={value}
      readOnly
      size="2"
      sx={{ fontSize: "16px", color: "#ffe234" }}
    />
  );
}

export default CustomRating;
