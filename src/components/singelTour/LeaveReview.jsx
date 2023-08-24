import React, { useState } from "react";
import CustomTextField from "../header/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function LeaveReview() {
  const methods = useForm();
  const [value, setValue] = useState(0);

  return (
    <div className="mt-10">
      <div className=" py-5 px-5  md:py-10  bg-[#F5F5F5] border border-[#DEDEDE] rounded-[20px] ">
        <p className="text-xl text-[#3D3D3D] font-bold">Leave a review!</p>
        <FormProvider {...methods}>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-5">
            <div className="">
              <CustomTextField name="name" label="Name " type={"text"} />
            </div>
            <div className="">
              <CustomTextField name="email" label="email " type={"email"} />
            </div>
            <div className="md:col-span-2">
              <CustomTextField name="place" label="Place " type={"text"} />
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col gap-4">
                <Typography component="legend">Click to rate</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  Review title
                </InputLabel>
                <CustomTextField
                  name="trip"
                  label="Example: The best trip EVER! "
                  type={"text"}
                />
              </div>
            </div>

            {/*text message */}
            <div className="   md:col-span-2">
              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Description"
                  {...methods.register("comment", { required: true })}
                ></textarea>
              </div>
            </div>
            {/* buttonsent */}
            <div className=" md:col-span-2 ">
              <div className=" flex justify-center">
                <button
                  disabled
                  className="flex  justify-center disabled:opacity-25 w-[140px] items-center py-3 bg-[#01a8c3] rounded-md cursor-pointer "
                >
                  <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                    Add Review
                  </span>
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default LeaveReview;
