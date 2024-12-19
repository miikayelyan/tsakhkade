"use client";

import RoomPreview from "./RoomPreview/RoomPreview";
import Button from "../Button/Button";
import { FC } from "react";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const HotelPreview: FC = () => {
  const roomData = [
    {
      imageSrc:
        "https://static.wixstatic.com/media/c837a6_96fae0e0e61c4da7b15488f2ab2c7538~mv2.jpg/v1/fill/w_1642,h_936,fp_0.86_0.49,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/The_Executive_01.jpg",
      alt: "Classic Room with King-size Bed",
      title: "Classic Room",
      roomFeatures: [
        { description: "2 Adults (30m2)" },
        { description: "King size bed (76 x 80 inches)" },
        { description: "Separate seating area" },
        { description: "Spacious work desk" },
      ],
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/c837a6_96fae0e0e61c4da7b15488f2ab2c7538~mv2.jpg/v1/fill/w_1642,h_936,fp_0.86_0.49,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/The_Executive_01.jpg",
      alt: "Classic Room with King-size Bed",
      title: "Classic Room",
      roomFeatures: [
        { description: "2 Adults (30m2)" },
        { description: "King size bed (76 x 80 inches)" },
        { description: "Separate seating area" },
        { description: "Spacious work desk" },
      ],
    },
  ];

  const firstRoomRef = useRef(null);
  const secondRoomRef = useRef(null);

  const { scrollYProgress: firstRoomScrollY } = useScroll({
    target: secondRoomRef,
    offset: ["start 70%", "end 20%"],
  });

  const { scrollYProgress: secondRoomScrollY } = useScroll({
    target: secondRoomRef,
    offset: ["start 20%", "end 0%"],
  });

  // const firstRoomScale = useTransform(firstRoomScrollY, [0, 1], [1, 0.8]);
  // const secondRoomScale = useTransform(secondRoomScrollY, [0, 1], [1, 0.8]);

  return (
    <section>
      <div className="px-4 pb-[72px] grid grid-rows-3 gap-y-28">
        <div className="sticky top-36">
          <div className="grid px-4 py-9 h-full">
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
        <RoomPreview
          ref={firstRoomRef}
          // scale={firstRoomScale}
          {...roomData[0]}
        />
        <RoomPreview
          ref={secondRoomRef}
          // scale={secondRoomScale}
          {...roomData[1]}
        />
      </div>
    </section>
  );
};

export default HotelPreview;
