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

  const lastScrollYRef = useRef(isBrowser ? window.scrollY : 0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
    <div className="fixed pointer-events-none top-0 left-0 w-full h-full z-50">
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -86 : 0 }}
        transition={{ ease: "easeInOut" }}
        className="header"
      >
        <HotelName />
        <HotelLogo />
        <CtaContainer />
      </motion.header>
    </div>
  );
}
