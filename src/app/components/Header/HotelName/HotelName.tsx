"use client";
import Link from "next/link";
import { MouseEvent } from "react";

export const scrollToTop = (
  e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLDivElement>
) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function HotelName() {
  return (
    <div className="flex items-center h-[84px] pr-[18px] py-[18px] pl-9">
      <Link
        className="w-fit no-underline text-black font-light"
        href="#"
        onClick={scrollToTop}
        aria-label="Navigate to the Tsakhkadé homepage"
      >
        The Tsakhkade
      </Link>
    </div>
  );
}
