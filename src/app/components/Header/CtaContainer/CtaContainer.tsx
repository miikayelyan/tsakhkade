import React from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

function CtaContainer() {
  return (
    <div className="flex justify-end items-center h-[84px] pr-5 py-[18px] pl-[18px]">
      <div className="w-40 mr-20">
        <Link
          className="flex gap-7 items-center w-fit float-end no-underline text-black italic"
          href="#"
          aria-label="Book your stay now"
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
      <div>
        <Hamburger size={24} aria-label="Toggle menu" />
      </div>
    </div>
  );
}

export default CtaContainer;
