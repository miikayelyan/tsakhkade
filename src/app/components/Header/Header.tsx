"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HotelName from "./HotelName/HotelName";
import HotelLogo from "./HotelLogo/HotelLogo";
import CtaContainer from "./CtaContainer/CtaContainer";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    console.log("useEffect trigger");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -84 : 0 }}
      transition={{ type: "tween", duration: 0.4 }}
      className="fixed w-full z-20 bg-white border-b border-black"
      aria-hidden
    >
      <div className="grid grid-cols-[33.3%_33.3%_33.3%] grid-rows-[84px]">
        <HotelName />
        <HotelLogo />
        <CtaContainer />
      </div>
    </motion.header>
  );
}
