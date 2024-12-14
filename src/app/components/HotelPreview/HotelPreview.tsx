"use client";

import React from "react";
import RoomPreview from "./RoomPreview/RoomPreview";
import Button from "../Button/Button";

export default function HotelPreview() {
  return (
    <section>
      <div className="px-4 pb-20 grid grid-cols-[1404px] grid-rows-3 gap-y-10">
        <div className="sticky top-[110px]">
          <div className="px-4 py-9">
            <div className="flex flex-col self-center justify-self-center w-[770px]">
              <div className="mb-20">
                <h2 className="text-2xl text-center font-normal">
                  Rooms & Suites
                </h2>
              </div>
              <div className="mb-7">
                <p className="text-5xl font-normal text-center">
                  Fresh linens, curated wall art and hand-picked minibars keep
                  The Tsakhkadé rooms simple, smart and sophisticated.
                </p>
              </div>
              <Button
                whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
                transition={{ duration: 0.3 }}
                title="Explore All Rooms"
                containerStyles="self-center items-center justify-center w-52 h-10 border border-solid border-grayCustom"
              />
            </div>
          </div>
        </div>
        <RoomPreview />
        <RoomPreview />
      </div>
    </section>
  );
}
