import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  useEffect(() => {
    const portalRoot = document.getElementById("portal-root") as HTMLElement;
    if (!portalRoot) {
      console.error("Portal root not found");
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
        <div className="flex flex-col w-full sidebar-container-margin row-start-1 col-start-1 row-end-2 col-end-2">
          <nav
            aria-label="Site"
            className="w-full grid navbar-container-margin"
          >
            <ul className="list-none">
              <li className="py-1.5 pl-4 sidebar-border sidebar-font">
                <Link href="#">Rooms & Suites</Link>
              </li>
              <li className="py-1.5 pl-4 sidebar-border sidebar-font">
                <Link href="#">The Hotel</Link>
              </li>
              <li className="py-1.5 pl-4 sidebar-border sidebar-font">
                <Link href="#">Dine & Drink</Link>
              </li>
              <li className="py-1.5 pl-4 sidebar-border sidebar-font">
                <Link href="#">Amenities</Link>
              </li>
              <li className="py-1.5 pl-4 sidebar-border sidebar-font">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* Sidebar image */}
          <div className="w-1/4 aspect-[1/1.4] sidebar-image-margin self-end order-2">
            <div>
              <Image
                src="https://static.wixstatic.com/media/c837a6_099669c22842461184ac99b0400cbe45~mv2.jpg/v1/fill/w_360,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Our_Hotel_02.jpg"
                width={180}
                height={252}
                alt="Our Hotel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") as HTMLElement
  );
};

export default Sidebar;
