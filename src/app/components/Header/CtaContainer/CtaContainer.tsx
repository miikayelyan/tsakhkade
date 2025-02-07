"use client";

import Button from "../../Button/Button";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

export default function CtaContainer() {
  return (
    <div className="flex flex-col">
      <div className="relative header-padding-right-section flex-grow grid">
        <Button
          title="Book Now"
          containerStyles="mr-20 self-center justify-self-end custom_tablet:w-[100px] custom_tablet:mr-16 custom_mobile:w-[88px] hover:underline"
          textStyles="custom_tablet:text-[15px]"
        />
        <HamburgerMenu />
      </div>
    </div>
  );
}
