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
    <main className="z-10">
      <section className="grid grid-cols-2 grid-rows-[250px_792px] px-4 pt-4 pb-9">
        <div className="grid sticky top-[84px] w-full col-span-2">
          <div className="flex flex-col self-center justify-self-center mb-8">
            <div className="mb-2.5">
              <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-center font-normal">
                The Tsakhkadé Hotel
              </h1>
            </div>
            <div>
              <p className="text-2xl text-center font-normal">
                <span>A Classic Urban Escape</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center row-start-2 row-end-3 z-10">
          <motion.div ref={targetRef} style={{ y, scale }} className="w-full">
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
          <motion.div ref={targetRef} style={{ y, scale }} className="w-full">
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
