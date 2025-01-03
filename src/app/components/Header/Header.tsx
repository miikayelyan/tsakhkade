"use client";

import { useState, useEffect } from "react";
import HotelLogo from "./HotelLogo/HotelLogo";
import CtaContainer from "./CtaContainer/CtaContainer";
import HotelName from "./HotelName/HotelName";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const isBrowser = typeof window !== "undefined";
  console.log(isBrowser);
  const lastScrollYRef = useRef(isBrowser ? window.scrollY : 0);
  console.log(lastScrollYRef.current);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log("scroll function trigger");
    const initialScrollY = isBrowser ? window.scrollY : 0;
    if (initialScrollY > 0) setIsHidden(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current + 5) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollYRef.current - 5) {
        setIsHidden(false);
      }
      lastScrollYRef.current = currentScrollY;
    };

    const debouncedHandleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [isBrowser]);

  return (
    <div className="fixed w-full h-full z-50">
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -86 : 0 }}
        transition={{ ease: "easeInOut" }}
        className="grid grid-rows-[minmax(50px,_auto)] custom_tablet:grid-rows-[minmax(49.75px,_auto)] grid-cols-[1fr_1fr_1fr] custom_tablet:grid-cols-[1.29fr_0.42fr_1.29fr] bg-slate-50 border-b border-gray-600"
      >
        <HotelName />
        <HotelLogo />
        <CtaContainer />
      </motion.header>
    </div>
  );
}
