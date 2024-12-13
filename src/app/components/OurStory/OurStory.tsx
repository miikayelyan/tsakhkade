"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/Button";

export default function OurStory() {
  const targetRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end 70%"],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.8, 1], [400, 0, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, -15, 0]);

  return (
    <section className="border-solid border-y border-stone-400">
      <div className="grid grid-rows-[460px_422px] grid-cols-[60%_40%]">
        <div className="px-4 py-9">
          <div
            style={{ perspective: "2000px" }}
            className="flex flex-col w-[828px]"
          >
            <div className="self-center mb-11 order-1 w-full">
              <h2 className="w-full h-full">
                <span className="text-[25.875px]">Our Story</span>
              </h2>
            </div>
            <motion.div
              ref={targetRef}
              style={{ transformStyle: "preserve-3d", rotateY }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="self-center order-2"
            >
              <Image
                src="https://static.wixstatic.com/media/c837a6_9a4958de49b84b0ea08608465c8e54ee~mv2.jpg/v1/fill/w_450,h_630,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Hote_Lobby_02.jpg"
                width={225}
                height={315}
                alt="Hotel armchair"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
        <div className="px-4 pt-24 pb-9">
          <div className="w-[540px]">
            <div className="mb-7">
              <span className="text-5xl">
                A Cultural Gem in <br /> the Midst of the City
              </span>
            </div>
            <div className="mb-14">
              <span className="text-base">
                Situated in the heart of the city, and a stone’s throw from the
                city’s coveted eateries and culture, The Tsakhkadé provides
                business and holiday-makers with a luxurious, modern and ambient
                urban getaway.
              </span>
            </div>

            <Button
              whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
              transition={{ duration: 0.3 }}
              title="Read More"
              containerStyles="h-10 border border-grayCustom items-center justify-center"
            />
          </div>
        </div>
        <div className="col-start-2 row-start-1 col-end-3 row-end-3">
          <div className="px-4 py-9">
            <motion.div ref={imageRef} style={{ y: imageY }}>
              <Image
                src="https://static.wixstatic.com/media/c837a6_31ea8dd4c6d34c52b09e20e0bf71aa14~mv2.jpg/v1/fill/w_1080,h_1622,fp_0.29_0.44,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hote_Lobby.jpg"
                priority
                width={540}
                height={811}
                alt="Fancy vase"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
