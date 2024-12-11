"use client";

import React from "react";
import Hamburger from "hamburger-react";
import Button from "../../Button/Button";

function CtaContainer() {
  return (
    <div className="flex justify-end items-center gap-4 pr-5 py-4 pl-4">
      <Button
        title="Book Now"
        containerStyles="justify-end min-w-[82px] hover:underline"
        textStyles="italic"
      />
      <div className="min-w-10">
        <Hamburger size={24} aria-label="Toggle menu" />
      </div>
    </div>
  );
}

export default CtaContainer;
