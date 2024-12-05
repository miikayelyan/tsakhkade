"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  return (
    <main>
      <section className="grid grid-cols-[50%_50%] grid-rows-[248px_810px] px-[18px] pt-[18px] pb-9">
        <div className="sticky top-[37.375px]">
          <div className="grid grid-rows-[112px] grid-cols-[1404px] pt-[98.5px] pb-[45px] w-[1404px]">
            <div className="flex flex-col w-[53%] justify-self-center">
              <div className="w-full mb-[10px]">
                <h1 className="text-[63px] leading-[63px] text-center font-normal">
                  <span>The Tsakhkadé Hotel</span>
                </h1>
              </div>
              <div className="w-full self-center">
                <p className="text-[25.875px] text-center font-normal">
                  <span>A Classic Urban Escape</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center col-start-1 row-start-2 col-end-2 row-end-3 w-[708px] h-[810px] z-10">
          <motion.div
            ref={targetRef}
            style={{ y, scale }}
            className="grid flex-grow"
          >
            <video
              src="https://video.wixstatic.com/video/c837a6_ebf151842a6f4684b42cf377207a7231/1080p/mp4/file.mp4"
              className="object-cover object-center w-full h-full"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
        </div>
        <div className="flex flex-col items-center row-end-3 w-full h-[810px] z-10">
          <motion.div
            ref={targetRef}
            style={{ y, scale }}
            className="grid grid-rows-[810px] grid-cols-[702px]"
          >
            <video
              src="https://video.wixstatic.com/video/c837a6_88ac4391581e472e8d1ed08f9a5fa808/1080p/mp4/file.mp4"
              className="object-cover object-center w-full h-full"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
