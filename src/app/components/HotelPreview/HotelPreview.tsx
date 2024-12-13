"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RoomPreview from "./RoomPreview/RoomPreview";

export default function HotelPreview() {
  return (
    <section>
      <div className="px-4 pb-20 grid grid-cols-[1404px] grid-rows-3 gap-y-8">
        <div className="flex flex-col col-start-1 row-start-1 col-end-1 row-end-1 sticky top-[110px] w-full">
          <div className="grid flex-grow grid-cols-[1368px] grid-rows-[431.984px] px-[18px] py-9">
            <div className="flex flex-col row-start-1 col-start-1 row-end-2 col-end-2 self-center justify-self-center w-[769.5px]">
              <div className="self-center mb-[108px] order-1 w-full">
                <h2 className="text-[25.875px] text-center font-normal">
                  Rooms & Suites
                </h2>
              </div>
              <div className="self-center mb-[27.0023px] order-2 text-start w-full">
                <p className="text-[47.25px] font-normal text-center leading-[51.975px]">
                  Fresh linens, curated wall art and hand-picked minibars keep
                  The Tsakhkadé rooms simple, smart and sophisticated.
                </p>
              </div>
              <div className="self-center h-[40px] order-3 w-[200px] border border-solid border-grayCustom">
                <Link
                  href="#"
                  className="text-black cursor-pointer"
                  aria-label="Explore all rooms"
                >
                  <span className="items-center flex justify-center h-[38px] w-[198px]">
                    <span className="italic font-normal leading-[22.4px]">
                      Explore All Rooms
                    </span>
                    <span className="ml-1">
                      <motion.svg
                        style={{ fill: "currentcolor" }}
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 30 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        data-bbox="30.718 20 138.564 160"
                        viewBox="0 0 200 200"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="shape"
                      >
                        <g>
                          <path d="M30.718 20l138.564 80-138.564 80 53.417-80.027L30.718 20z"></path>
                        </g>
                      </motion.svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <RoomPreview />
        <RoomPreview />
      </div>
    </section>
  );
}
