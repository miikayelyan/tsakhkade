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
    <div className="flex items-center pr-4 py-4 pl-9">
      <Link
        className="w-fit no-underline font-light"
        href="/"
        onClick={scrollToTop}
        aria-label="Navigate to the Tsakhkadé homepage"
      >
        The Tsakhkade
      </Link>
    </div>
  );
}
