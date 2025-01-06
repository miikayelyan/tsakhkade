"use client";
import { useState, useRef } from "react";
import Sidebar from "../Header/CtaContainer/Sidebar";
import { useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const burgerButtonRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else if (burgerButtonRef.current) {
      burgerButtonRef.current.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const baseClasses =
    "grid w-[50px] h-[50px] self-center justify-self-end relative";
  const tabletClasses = "custom_tablet:w-10 custom_tablet:h-10 -mr-2";

  return (
    <div
      role="button"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      aria-controls="sidebar"
      onClick={toggleSidebar}
      onKeyDown={(e) => e.key === "Enter" && toggleSidebar()}
      tabIndex={0}
      ref={burgerButtonRef}
      className={`${baseClasses} ${tabletClasses} col-start-1 col-end-2 row-start-1 row-end-2`}
    >
      <svg
        aria-hidden="true"
        data-bbox="20 76.4 160 47.2"
        viewBox="0 0 200 200"
        className="grid self-center justify-self-center w-[50px] h-[50px] custom_tablet:w-10 custom_tablet:h-10"
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
