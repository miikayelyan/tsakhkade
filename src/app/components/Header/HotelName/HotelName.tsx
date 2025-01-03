"use client";

import Link from "next/link";
import { FC } from "react";
import useRedirectOrScroll from "@/app/hooks/useRedirectOrScroll";

const HotelName: FC = () => {
  const redirectOrScroll = useRedirectOrScroll();
  return (
    <div className="flex self-stretch justify-self-stretch">
      <div className="relative header-padding-left-section flex-grow grid grid-rows-[minmax(max-content,_100%)] grid-cols-[minmax(0px,_1fr)]">
        <div className="self-center justify-self-start relative">
          <p>
            <Link href="/" onClick={redirectOrScroll}>
              The Tsakhkade
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelName;
