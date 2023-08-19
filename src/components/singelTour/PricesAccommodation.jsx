import React from "react";
import { MdBedroomParent } from "react-icons/md";

function PricesAccommodation({ accommodations }) {
  return (
    <div>
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-0 rounded-t-2xl overflow-hidden border divide-y">
          {/* header */}
          <div className="col-span-2">
            <div className="py-5 px-3 bg-[#00229E] flex justify-start items-center">
              <span className="text-white font-bold text-lg">Months</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="py-5 px-3 bg-[#F5F5F5] flex justify-center border-x items-center">
              <span className="text-[#3D3D3D] font-bold text-lg">Hotels</span>
            </div>
          </div>
          <div className="col-span-1">
            {" "}
            <div className="py-5 px-3 bg-[#F5F5F5] flex justify-center items-center">
              <span className="text-[#3D3D3D] font-bold text-lg">Prices</span>
            </div>
          </div>
          {/* content */}
          {accommodations?.map((accommodation) => (
            <div key={accommodation?.id} className="col-span-5">
              <div className="grid grid-cols-5 gap-0 divide-y">
                <div className="col-span-2">
                  {accommodation?.prices?.map((price, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center h-full"
                    >
                      <p className="text-[#3D3D3D] font-bold text-lg text-center">
                        {price.name}
                      </p>
                    </div>
                  ))}
                </div>
                {/* hotels */}
                <div className="col-span-2">
                  <div className="py-5 px-3 border-x">
                    <div className="flex flex-col gap-3">
                      {accommodation?.hotels?.map((hotel) => (
                        <div key={hotel.id} className="flex flex-col gap-3">
                          <p className="text-[#3D3D3D] font-bold text-lg">
                            {hotel.title}
                          </p>
                          <div className=" flex items-center gap-1">
                            <MdBedroomParent className="text-lg text-[#00229E]" />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: hotel.body,
                              }}
                              className=""
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  {" "}
                  <div className="flex flex-col justify-center items-center h-full">
                    {accommodation?.prices?.map((price, i) => (
                      <div key={i} className="">
                        <p className="text-[#3D3D3D] font-bold text-4xl">
                          {price?.items[0]?.price_value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricesAccommodation;
