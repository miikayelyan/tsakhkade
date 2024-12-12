"use client";

import Link from "next/link";
import { FC } from "react";
import useRedirectOrScroll from "@/app/hooks/useRedirectOrScroll";

const HotelName: FC = () => {
  const redirectOrScroll = useRedirectOrScroll();
  return (
    <div className="flex items-center pr-4 py-4 pl-9">
      <Link
        href="/"
        onClick={redirectOrScroll}
        aria-label="Navigate to the Tsakhkadé homepage"
        className="w-fit no-underline font-light"
      >
        The Tsakhkade
      </Link>
    </div>
  );
};

export default HotelName;
