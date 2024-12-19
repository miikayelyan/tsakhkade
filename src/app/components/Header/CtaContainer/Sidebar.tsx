import { FC } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <button
        onClick={toggleSidebar}
        className="p-2 text-xl absolute top-4 right-4"
        aria-label="Close Sidebar"
      >
        ✕
      </button>
      {/* <nav className="mt-16">
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav> */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
