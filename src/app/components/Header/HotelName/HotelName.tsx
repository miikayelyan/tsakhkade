import Link from "next/link";
import React from "react";

function HotelName() {
  return (
    <div className="flex flex-col justify-center h-[84px] pr-[18px] py-[18px] pl-9">
      <Link
        className="w-fit no-underline text-black font-light"
        href="/"
        aria-label="Navigate to the Tsakhkadé homepage"
      >
        The Tsakhkade
      </Link>
    </div>
  );
}

export default HotelName;
