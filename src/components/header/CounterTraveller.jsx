import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { ImMan } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
function CounterTraveller({}) {
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
  };
  const handleremoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <ImMan className="text-2xl text-MainYeloow" />
          <span className="text-sm text-[#555] font-sans capitalize font-medium">
            {" "}
            Adults
          </span>
        </div>
        <div className="flex items-center px-5">
          <div
            onClick={() => {
              handleAddCounter("adults");
            }}
            className="text-mainColor text-xl cursor-pointer"
          >
            <BsPersonAdd />{" "}
          </div>
          <TextField
            fullWidth
            type="tel"
            variant="standard"
            value={aduits}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <div
            onClick={() => {
              handleremoveCounter("adults");
            }}
            className="text-mainColor text-xl cursor-pointer"
          >
            <MdOutlinePersonRemoveAlt1 />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <FaChild className="text-2xl text-MainYeloow" />
          <span className="text-sm text-[#555] font-sans capitalize font-medium">
            Children
          </span>
        </div>
        <div className="flex items-center px-5">
          <div
            onClick={() => {
              handleAddCounter("childs");
            }}
            className="text-mainColor text-xl cursor-pointer"
          >
            <BsPersonAdd />{" "}
          </div>
          <TextField
            fullWidth
            type="tel"
            variant="standard"
            value={childs}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <div
            onClick={() => {
              handleremoveCounter("childs");
            }}
            className="text-mainColor text-xl cursor-pointer"
          >
            <MdOutlinePersonRemoveAlt1 />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterTraveller;
