import { FC } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import useLockBodyScroll from "@/app/hooks/useLockBodyScroll";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  useLockBodyScroll();

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return createPortal(
    <div
      role="dialog"
      id="sidebar"
      aria-modal
      aria-labelledby="close-btn"
      className="grid min-h-[300px] h-screen left-0 top-0 fixed w-screen bg-sidebar_bg z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="grid grid-cols-1 grid-rows-1 w-1/2 custom_mobile:w-full justify-self-end relative bg-bg_primary overflow-scroll"
      >
        {/* Close Button */}
        <div className="h-6 w-10 col-start-1 row-start-1 col-end-2 row-end-2 justify-self-end burger-menu-close-button-margin">
          <button
            id="close-btn"
            aria-label="close sidebar"
            onClick={onClose}
            className="w-full"
          >
            Close
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full sidebar-container-margin row-start-1 col-start-1 row-end-2 col-end-2">
          <nav
            aria-label="Site"
            className="w-full grid navbar-container-margin"
          >
            <ul className="list-none">
              {[
                "Rooms & Suites",
                "The Hotel",
                "Dine & Drink",
                "Amenities",
                "Contact",
              ].map((item) => (
                <li key={item} className="sidebar-list-item" tabIndex={-1}>
                  <div className="grid">
                    <Link href="#">{item}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar image */}
          <div className="sidebar-image-width aspect-[1/1.4] sidebar-image-margin self-end order-2">
            <Image
              src="/images/sidebar-image.jpg"
              width={180}
              height={252}
              alt="Our Hotel"
              className="w-full h-full"
            />
          </div>

          {/* Social Media Links */}
          <div className="h-[21px] sidebar-socials-width sidebar-socials-margin self-end order-3">
            <ul
              className="flex list-none h-full gap-x-2"
              aria-label="Social Bar"
            >
              {["Instagram", "Facebook", "TripAdvisor"].map((platform) => (
                <li key={platform} className="social">
                  <Link
                    href="#"
                    aria-label={platform}
                    className="w-full h-full"
                  >
                    <Image
                      src={`/icons/${platform.toLowerCase()}.png`}
                      width={42}
                      height={42}
                      alt={platform}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default Sidebar;
