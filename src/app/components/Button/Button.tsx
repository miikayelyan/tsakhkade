"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
}

const Button: FC<ButtonProps> = ({ title, textStyles, containerStyles }) => (
  <motion.div className={`flex w-40 text-black ${containerStyles}`}>
    <Link href="#">
      <div className="flex w-full h-full justify-center items-center">
        <span
          className={`text-base mr-1 text-center leading-[22.4px] ${textStyles}`}
        >
          {title}
        </span>
        <motion.svg
          className="ml-1"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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

export default Button;
