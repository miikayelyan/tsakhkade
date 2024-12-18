"use client";

import Hamburger from "hamburger-react";
import Button from "../../Button/Button";
import { FC } from "react";

interface CtaContainerProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const CtaContainer: FC<CtaContainerProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex justify-end items-center gap-4 pr-5 py-4 pl-4">
      <Button
        title="Book Now"
        containerStyles="justify-end min-w-[82px]"
        textStyles="hover:underline"
      />
      <div className="min-w-10">
        <Hamburger
          size={24}
          toggled={isOpen}
          toggle={toggleSidebar}
          aria-label="Toggle menu"
        />
      </div>
    </div>
  );
};

export default CtaContainer;
