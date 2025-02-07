"use client";
import { useState, useEffect } from "react";
import Sidebar from "../Header/CtaContainer/Sidebar";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    console.log("Event listener added");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Event listener removed");
    };
  }, []);

  return (
    <div
      role="button"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      aria-controls="Sidebar"
      onClick={toggleSidebar}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          toggleSidebar();
        }
      }}
      tabIndex={0}
      className="grid w-[50px] h-[50px] self-center justify-self-end relative custom_tablet:w-10 custom_tablet:h-10 -mr-2 col-start-1 col-end-2 row-start-1 row-end-2"
    >
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="grid self-center justify-self-center w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M180 70v2.7H20v-2.7h160z"></path>
          <path d="M180 100v2.7H20v-2.7h160z"></path>
          <path d="M180 130v2.7H20v-2.7h160z"></path>
        </g>
      </svg>

      {isOpen && <Sidebar onClose={closeSidebar} />}
    </div>
  );
}
