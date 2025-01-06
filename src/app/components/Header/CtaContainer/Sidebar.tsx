import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  useEffect(() => {
    const portalRoot = document.getElementById("portal-root") as HTMLElement;
    if (!portalRoot) {
      console.error("Portal root not found");
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
      aria-labelledby="sidebar"
      className="grid min-h-[300px] h-screen left-0 top-0 fixed w-screen bg-sidebar_bg z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="grid w-1/2 custom_mobile:w-full justify-self-end relative bg-bg_primary overflow-scroll"
      >
        <div className="h-6 w-10 justify-self-end burger-menu-close-button-margin">
          <button aria-label="close sidebar" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") as HTMLElement
  );
};

export default Sidebar;
