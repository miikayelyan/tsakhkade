import Link from "next/link";
import { MouseEvent } from "react";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

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
    <div className="flex flex-col justify-center h-[84px] pr-[18px] py-[18px] pl-9">
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
