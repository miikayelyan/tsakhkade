"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HotelLogo from "./HotelLogo/HotelLogo";
import CtaContainer from "./CtaContainer/CtaContainer";
import HotelName from "./HotelName/HotelName";
import Sidebar from "./CtaContainer/Sidebar";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -84 : 0 }}
      transition={{ type: "tween", duration: 0.4 }}
      className="fixed w-full bg-white z-20 border-b border-black"
    >
      <div className="grid grid-cols-3 grid-rows-[84px]">
        <HotelName />
        <HotelLogo />
        <div className={isSidebarOpen ? "bg-overlay" : ""}>
          <CtaContainer isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </motion.header>
  );
}
