import React from "react";
import Hamburger from "hamburger-react";
import CustomButton from "../../CustomButton/CustomButton";

function CtaContainer() {
  return (
    <div className="flex justify-end items-center h-[84px] pr-5 py-[18px] pl-[18px]">
      <CustomButton />
      <Hamburger size={24} aria-label="Toggle menu" />
    </div>
  );
}

export default CtaContainer;
