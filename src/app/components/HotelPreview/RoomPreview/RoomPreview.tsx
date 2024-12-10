"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function RoomPreview() {
  return (
    <div className="flex flex-col col-start-1 row-start-2 col-end-2 row-end-3 h-[504.656px] sticky top-[110px] w-[1404px] bg-cardBg">
      <div className="p-[18px] grid flex-grow grid-cols-[1368px] grid-rows-[468.656px] h-full w-full">
        <div className="self-end flex col-start-1 row-start-1 col-end-1 row-end-1 h-[468.5px] justify-self-start w-[1368.01px]">
          <div className="self-start grid grid-cols-[820.797px] grid-rows-[468px] h-[468px] order-1 w-[820.797px]">
            <Image
              src="https://static.wixstatic.com/media/c837a6_96fae0e0e61c4da7b15488f2ab2c7538~mv2.jpg/v1/fill/w_1642,h_936,fp_0.86_0.49,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/The_Executive_01.jpg"
              width={821}
              height={468}
              alt="The Executive"
            />
          </div>
          <div className="flex flex-col h-[293.648px] order-2 w-[547.195px]">
            <div className="pl-[18px] flex flex-col h-full w-full">
              <div className="mb-9 w-[529.195px]">
                <h3 className="leading-[34.65px] w-full">
                  <span className="text-[31.5px] font-normal text-left italic">
                    The Executive
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-[529.195px] grid-rows-[163px] mb-9">
                <div className="flex flex-col gap-[1px] w-full h-full">
                  <div className="grid grid-cols-[529.195px] grid-rows-[40px] h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center col-start-1 row-start-1 col-end-2 row-end-2">
                      <p>
                        <span className="font-normal text-base">
                          2 Adults (30m2)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[529.195px] grid-rows-[40px] h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center col-start-1 row-start-1 col-end-2 row-end-2">
                      <p>
                        <span className="font-normal text-base">
                          King size bed (76 x 80 inches)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[529.195px] grid-rows-[40px] h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center col-start-1 row-start-1 col-end-2 row-end-2">
                      <p>
                        <span className="font-normal text-base">
                          Separate seating area
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[529.195px] grid-rows-[40px] h-[40px] w-full border-b border-descGapBg">
                    <div className="self-center col-start-1 row-start-1 col-end-2 row-end-2">
                      <p>
                        <span className="font-normal text-base">
                          Spacious work desk
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[160px]">
                <Link
                  className="flex gap-[7px] w-fit items-center no-underline text-black text-base italic"
                  href="#"
                  aria-label="Book The Executive Room Now"
                >
                  Book Now
                  <div>
                    <svg
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
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomPreview;
