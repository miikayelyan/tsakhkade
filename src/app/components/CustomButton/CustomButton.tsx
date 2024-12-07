"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomButton() {
  return (
    <motion.div className="flex justify-center items-center h-10 w-40 text-black">
      <Link href="#">
        <div className="flex w-full h-full justify-center items-center">
          <span className="text-base mr-1 text-center leading-[22.4px]">
            Hardcode
          </span>
          <motion.svg
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewBox="0 0 200 200"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30.718 20l138.564 80-138.564 80 53.417-80.027L30.718 20z"></path>
          </motion.svg>
        </div>
      </Link>
    </motion.div>
  );
}
