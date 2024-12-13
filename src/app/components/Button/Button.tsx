"use client";
import { FC } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  containerStyles?: string;
  textStyles?: string;
}

type ButtonProps = CustomButtonProps & HTMLMotionProps<"div">;

const Button: FC<ButtonProps> = ({
  title,
  textStyles,
  containerStyles,
  ...motionProps
}) => (
  <motion.div
    {...motionProps}
    className={`flex w-40 text-black ${containerStyles}`}
  >
    <Link href="#">
      <div className="flex justify-center items-center">
        <span className={`text-base mr-1 text-center italic ${textStyles}`}>
          {title}
        </span>
        <motion.svg
          className="ml-1"
          style={{ fill: "currentcolor" }}
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
