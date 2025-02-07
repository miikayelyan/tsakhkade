"use client";

import useRedirectOrScroll from "@/app/hooks/useRedirectOrScroll";
import Link from "next/link";

export default function HotelLogo() {
  const redirectOrScroll = useRedirectOrScroll();

  return (
    <div className="flex">
      <div className="grid header-padding-middle-section flex-grow">
        <div className="justify-self-center hotellogo-size">
          <Link href="/" onClick={redirectOrScroll}>
            <svg
              viewBox="46.8 20 106.4 160"
              role="img"
              aria-label="Homepage"
              className="w-full h-full"
            >
              <g>
                <path
                  className="fill-[#A1998F]"
                  d="M97.5 178.3v-11.5l-8.6 5.7-4.6-3 13.2-8.8v-16.5L72 161.3l-4.6-3.1 30.1-20v-16.4L55.1 150l-8.3-5.5V86.1l5.1-3.4v63.4l11.8-7.9V74.8l5-3.3v63.4l11.9-8V63.5l5-3.4v63.6l11.9-8v-94L100 20l2.5 1.7v156.6L100 180z"
                ></path>
                <path
                  className="fill-[#A1998F]"
                  d="m114.4 29.6 5 3.3v134.2l-5 3.3z"
                ></path>
                <path
                  className="fill-[#A1998F]"
                  d="m131.3 40.9 5 3.3v111.6l-5 3.3z"
                ></path>
                <path
                  className="fill-[#A1998F]"
                  d="m148.1 52.1 5.1 3.4v89l-5.1 3.4z"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
