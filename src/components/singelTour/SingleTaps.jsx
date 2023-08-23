import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function SingleTaps({ value, handleChange }) {
  return (
    <div className=" container mx-auto   relative z-30 ">
      <Box
        sx={{
          maxWidth: "100%",
          bgcolor: "#F5F5F5",
          pt: 3,
          marginTop: -4,
          position: "relative",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="none"
          sx={{
            ".scrollable": {
              display: "none",
            },
          }}
          className=""
        >
          <Tab
            label="Overview"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
              "&.Mui-selected": {
                bgcolor: "#fff",
                color: "#101426",
              },
            }}
          />
          <Tab
            label="Itinerary"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
              "&.Mui-selected": {
                bgcolor: "#fff",
                color: "#101426",
              },
            }}
          />
          <Tab
            label="Prices and Accommodation"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
              "&.Mui-selected": {
                bgcolor: "#fff",
                color: "#101426",
              },
            }}
          />
          <Tab
            label="Trip Information"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
              "&.Mui-selected": {
                bgcolor: "#fff",
                color: "#101426",
              },
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
}

export default SingleTaps;
