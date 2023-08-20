import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SingleTaps({ value, handleChange }) {
  return (
    <div className=" container mx-auto md:px-10  ">
      <Box
        sx={{
          maxWidth: "100%",
          bgcolor: "#F5F5F5",
          py: 3,
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
        >
          <Tab
            label="Overview"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Itinerary"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Prices and Accommodation"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
            }}
          />
          <Tab
            label="Trip Information"
            sx={{
              color: "#3D3D3D",
              fontWeight: 700,
              textTransform: "capitalize",
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
}

export default SingleTaps;
