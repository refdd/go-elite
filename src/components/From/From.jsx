import React, { useState } from "react";
import CustomTextField from "../header/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import CountrySelect from "../header/CountrySelect";
import CounterTraveller from "../header/CounterTraveller";
import CustomDateField from "../header/CustomDateField";
import Checkbox from "@mui/material/Checkbox";

function From() {
  const methods = useForm();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="">
      <div className="rounded-3xl border-[#DEDEDE] border-[1px] bg-[#F5F5F5] overflow-hidden">
        <div className="bg-[#00229E] py-10"></div>
        <FormProvider {...methods}>
          <form className="grid grid-col-1 md:grid-cols-2 gap-3 py-3 px-5">
            {/*  name  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  name
                </InputLabel>
                <CustomTextField name="name" label="Name " type={"text"} />
              </div>
            </div>
            {/*  email  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  email
                </InputLabel>
                <CustomTextField name="email" label="email " type={"text"} />
              </div>
            </div>
            {/*  Nationality  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  Nationality
                </InputLabel>
                <CountrySelect />
              </div>
            </div>
            {/*  Number  */}
            <div className="md:col-span-2">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  Number
                </InputLabel>
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
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  Travelers
                </InputLabel>
                <CounterTraveller />
              </div>
            </div>
            {/*  check in date  */}
            <div className="">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  check-in date
                </InputLabel>
                <CustomDateField />
              </div>
            </div>
            {/*  check in date  */}
            <div className="">
              <div className=" flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  Check-out date
                </InputLabel>
                <CustomDateField />
              </div>
            </div>
            {/*text message */}
            <div className=" mt-5  md:col-span-2">
              <div className="flex flex-col gap-2">
                <InputLabel className="text-[16px] font-bold text-[#4E5255] capitalize">
                  Travelers
                </InputLabel>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="More Information"
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
              <button className="flex justify-center items-center py-4 bg-[#00229E] rounded-md cursor-pointer w-full">
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
