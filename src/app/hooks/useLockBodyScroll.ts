import { useEffect } from "react";

const useLockBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
};

export default useLockBodyScroll;
