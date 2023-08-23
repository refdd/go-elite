import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import dynamic from "next/dynamic";
const CountrySelect = dynamic(() => import("../header/CountrySelect"));
const CustomDateField = dynamic(() => import("../header/CustomDateField"));
const CounterTraveller = dynamic(() => import("../header/CounterTraveller"));
const CustomTextField = dynamic(() => import("../header/CustomTextField"));
function From() {
  const methods = useForm();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className=" md:sticky top-5">
      <div className="rounded-md border-[#DEDEDE] border-[1px]  overflow-hidden">
        <div className="bg-[#01a8c3] py-5 flex justify-center items-center">
          <span className="text-2xl text-white font-bold">Inquire Now</span>
        </div>
        <FormProvider {...methods}>
          <form className="grid grid-col-1 md:grid-cols-2 gap-3 py-3 px-5 bg-[#f5f5f5]">
            {/*  name  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <CustomTextField name="name" label="Name " type={"text"} />
              </div>
            </div>
            {/*  email  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <CustomTextField name="email" label="email " type={"text"} />
              </div>
            </div>
            {/*  Nationality  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <CountrySelect />
              </div>
            </div>
            {/*  Number  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <CustomTextField
                  name="Number"
                  label="Number "
                  type={"number"}
                />
              </div>
            </div>
            {/*  Travelers  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <CounterTraveller />
              </div>
            </div>
            {/*  check in date  */}
            <div className="">
              <div className=" flex flex-col gap-2">
                <CustomDateField />
              </div>
            </div>
            {/*  check in date  */}
            <div className="">
              <div className=" flex flex-col gap-2">
                <CustomDateField />
              </div>
            </div>
            {/*text message */}
            <div className=" mt-5  md:col-span-2">
              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Please detail your trip requirements and needs *"
                  {...methods.register("comment", { required: true })}
                ></textarea>
              </div>
            </div>
            {/* terms and Conditiions */}
            <div className="md:col-span-2">
              <div className=" flex items-center ">
                <Checkbox
                  required
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className=" flex gap-1 text-sm font-sans font-medium text-gray-800 capitalize">
                  Agree Our{" "}
                  <span className="text-mainColor cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  And
                  <span className="text-mainColor cursor-pointer">
                    {" "}
                    Privacy{" "}
                  </span>
                </p>
              </div>
            </div>
            {/* buttonsent */}
            <div className=" md:col-span-2 ">
              <button className="flex justify-center items-center py-4 bg-[#01a8c3] rounded-md cursor-pointer w-full">
                <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                  INQUIRE NOW!
                </span>
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default From;
