import { FC } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="h-screen fixed top-0 left-0 w-screen z-50">
        <div className="bg-sidebar_bg w-full h-full top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-scroll">
          <div className="w-1/2 self-stretch justify-self-end">
            <div className="bg-bg_primary h-full left-0 absolute top-0 w-full"></div>
            <div className="overflow-y-scroll overflow-x-hidden">
              {/* close button */}
              <div className="h-6 w-10 self-start justify-self-end burger-menu-close-button-margin">
                <button
                  type="button"
                  aria-label="Close"
                  className="h-full w-full"
                >
                  <span className="flex-row-reverse justify-center items-center flex h-full w-full text-base">
                    Close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
