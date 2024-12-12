import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

const useRedirectOrScroll = () => {
  const pathname = usePathname();

  const redirectOrScroll = (
    e: MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return redirectOrScroll;
};

export default useRedirectOrScroll;
