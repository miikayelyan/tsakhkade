"use client";
import { FC } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  onClick?: () => void;
  textStyles?: string;
}

type ButtonProps = CustomButtonProps & HTMLMotionProps<"div">;

const Button: FC<ButtonProps> = ({
  containerStyles,
  title,
  textStyles,
  ...motionProps
}) => (
  <motion.div
    {...motionProps}
    className={`h-6 w-40 relative col-start-1 col-end-2 row-start-1 row-end-2 ${containerStyles}`}
  >
    <Link className="h-full min-h-2.5 min-w-2.5 w-full" href="#">
      <span className="flex justify-end items-center h-full w-full">
        <span
          className={`mr-1 tracking-[0.04em] text-base italic ${textStyles}`}
        >
          {title}
        </span>
        <span className="ml-1 w-4 h-4 fill-black min-w-px">
          <span className="w-[inherit] h-[inherit]">
            <motion.svg
              viewBox="0 0 200 200"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30.718 20l138.564 80-138.564 80 53.417-80.027L30.718 20z"></path>
            </motion.svg>
          </span>
        </span>
      </span>
    </Link>
  </motion.div>
);

export default Button;
