"use client";

import React from "react";
import Image from "next/image";
import Button from "../../Button/Button";
import { FC } from "react";

interface Amenity {
  description: string;
}

interface RoomPreviewProps {
  imageSrc: string;
  alt: string;
  title: string;
  roomFeatures: Amenity[];
}

const Amenity: FC<Amenity> = ({ description }) => (
  <div className="grid h-[40px] w-full border-b border-descGapBg">
    <div className="self-center">
      <span className="font-normal text-base">{description}</span>
    </div>
  </div>
);

const RoomPreview: FC<RoomPreviewProps> = ({
  imageSrc,
  alt,
  title,
  roomFeatures,
}) => {
  return (
    <section className="sticky top-[110px] bg-cardBg">
      <div className="p-4">
        <div className="flex">
          <Image src={imageSrc} width={821} height={468} alt={alt} />
          <div className="flex-grow">
            <div className="pl-4">
              <div className="mb-9">
                <h3 className="text-3xl font-normal italic">{title}</h3>
              </div>
              <div className="mb-9">
                <div className="flex flex-col gap-[1px]">
                  {roomFeatures.map(({ description }, index) => (
                    <Amenity key={index} description={description} />
                  ))}
                </div>
              </div>
              <Button title="Book Now" textStyles="hover:underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPreview;
