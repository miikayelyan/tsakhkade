"use client";

import React from "react";
import Hamburger from "hamburger-react";
import Button from "../../Button/Button";

function CtaContainer() {
  return (
    <div className="flex justify-end items-center h-[84px] pr-5 py-[18px] pl-[18px]">
      <Button
        title="Book Now"
        containerStyles="justify-end mr-4 hover:underline"
        textStyles="italic"
      />
      <Hamburger size={24} aria-label="Toggle menu" />
    </div>
  );
}

export default CtaContainer;
