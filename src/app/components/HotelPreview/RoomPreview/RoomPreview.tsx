"use client";

import React from "react";
import Image from "next/image";
import Button from "../../Button/Button";

function RoomPreview() {
  return (
    <section className="sticky top-[110px] bg-cardBg">
      <div className="p-4">
        <div className="flex">
          <Image
            src="https://static.wixstatic.com/media/c837a6_96fae0e0e61c4da7b15488f2ab2c7538~mv2.jpg/v1/fill/w_1642,h_936,fp_0.86_0.49,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/The_Executive_01.jpg"
            width={821}
            height={468}
            alt="Executive Room with King-size Bed"
          />
          <div className="flex-grow">
            <div className="pl-4">
              <div className="mb-9">
                <h3 className="text-3xl font-normal italic">The Executive</h3>
              </div>
              <div className="mb-9">
                <div className="flex flex-col gap-[1px]">
                  <div className="grid h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center">
                      <span className="font-normal text-base">
                        2 Adults (30m2)
                      </span>
                    </div>
                  </div>
                  <div className="grid h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center">
                      <span className="font-normal text-base">
                        King size bed (76 x 80 inches)
                      </span>
                    </div>
                  </div>
                  <div className="grid h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center">
                      <span className="font-normal text-base">
                        Separate seating area
                      </span>
                    </div>
                  </div>
                  <div className="grid h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center">
                      <span className="font-normal text-base">
                        Spacious work desk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Button title="Book Now" textStyles="hover:underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomPreview;
