"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <main>
      <section className="grid grid-cols-2 grid-rows-[350px_810px] px-4 pt-4 pb-9">
        <div className="sticky top-20">
          <div className="grid grid-cols-[1404px] pt-24 pb-11 w-[1404px]">
            <div className="flex flex-col w-1/2 justify-self-center">
              <div className="mb-2.5">
                <h1 className="text-6xl text-center font-normal">
                  <span>The Tsakhkadé Hotel</span>
                </h1>
              </div>
              <div>
                <p className="text-2xl text-center font-normal">
                  <span>A Classic Urban Escape</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center row-start-2 row-end-3 z-10">
          <motion.div ref={targetRef} style={{ y, scale }}>
            <video
              src="https://video.wixstatic.com/video/c837a6_ebf151842a6f4684b42cf377207a7231/1080p/mp4/file.mp4"
              className="object-cover object-center w-full h-full"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
        </div>
        <div className="flex flex-col items-center row-end-3 z-10">
          <motion.div ref={targetRef} style={{ y, scale }}>
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
