"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      role="button"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      onClick={toggleSidebar}
      tabIndex={0}
      className="grid w-[50px] h-[50px] custom_tablet:w-10 custom_tablet:h-10 self-center justify-self-end relative col-start-1 col-end-2 row-start-1 row-end-2 grid-rows-[1fr] grid-cols-[1fr] -mr-2"
    >
      <svg
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

      {isOpen && (
        <div
          role="dialog"
          aria-label="Site Navigation"
          aria-modal
          tabIndex={-1}
          className="fixed top-0 right-0 z-50 w-1/2 h-screen bg-bg_primary grid overflow-y-hidden"
        >
          {/* Close Button */}
          <div className="h-6 w-10 justify-self-end burger-menu-close-button-margin">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
          {/* Sidebar Content */}
          <nav className="p-6">
            <ul>
              <li>
                <Link href="#">Rooms</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
