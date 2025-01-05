"use client";

import Button from "../../Button/Button";
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";

export default function CtaContainer() {
  return (
    <div className="flex w-auto h-auto flex-col self-stretch justify-self-stretch row-start-1 row-end-2 col-start-3 col-end-4 relative">
      <div className="relative header-padding-right-section flex-grow grid">
        <Button
          whileHover={{
            textDecoration: "underline",
          }}
          title="Book Now"
          containerStyles="mr-20 self-center justify-self-end custom_tablet:w-[100px] custom_tablet:mr-16 custom_mobile:w-[88px]"
          textStyles="custom_tablet:text-[15px]"
        />
        <HamburgerMenu />
      </div>
    </div>
  );
}
