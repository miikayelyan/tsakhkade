"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OurStory() {
  const targetRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end 30%"],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.8, 1], [400, 0, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, -15, 0]);

  return (
    <section className="flex flex-col h-[884.734px] border-solid border-y border-stone-400">
      <div className="grid grid-rows-[460.461px_422.273px] grid-cols-[864px_576px]">
        <div className="flex flex-col w-[864px] h-[460.461px]">
          <div className="px-[18px] py-9 grid flex-grow grid-cols-[828px] grid-rows-[388.461px] h-full w-full">
            <div
              style={{ perspective: "2000px" }}
              className="flex flex-col w-[828px] h-full"
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
                className="self-center aspect-[1/1.4] bg-scroll h-[315px] order-2 w-[225px]"
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
        </div>
        <div className="flex flex-col col-start-1 row-start-2 col-end-2 row-end-3 w-[864px] h-[422.273px]">
          <div className="px-[18px] pt-[99px] pb-9 grid flex-grow grid-cols-[828px] grid-rows-[287.273px]h-full w-full">
            <div className="self-end flex flex-col col-start-1 row-start-1 col-end-2 row-end-2 justify-start w-[540px]">
              <div className="mb-[27px] self-start order-1 w-full">
                <p className="text-start">
                  <span className="text-[47.25px] leading-[51.975px]">
                    A Cultural Gem in <br /> the Midst of the City
                  </span>
                </p>
              </div>
              <div className="self-start h-[62.3906px] mb-[53.9628px] order-2 text-start w-full">
                <p className="leading-[20.8px]">
                  <span className="text-base">
                    Situated in the heart of the city, and a stone’s throw from
                    the city’s coveted eateries and culture, The Tsakhkadé
                    provides business and holiday-makers with a luxurious,
                    modern and ambient urban getaway.
                  </span>
                </p>
              </div>

              <motion.div
                className="h-[40px] order-3 w-[160px] border border-grayCustom text-black flex items-center justify-center"
                initial={{ backgroundColor: "#ffffff", color: "#000000" }}
                whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                <Link href="#">
                  <span className="flex basis-auto flex-grow truncate w-[158px] h-[38px] justify-center items-center">
                    <span className="text-base italic mr-[4px] text-center leading-[22.4px] h-[22.3984px]">
                      Read More
                    </span>
                    <span className="ml-1">
                      <motion.svg
                        style={{ fill: "currentcolor" }}
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 30 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        data-bbox="30.718 20 138.564 160"
                        viewBox="0 0 200 200"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        data-type="shape"
                      >
                        <g>
                          <path d="M30.718 20l138.564 80-138.564 80 53.417-80.027L30.718 20z"></path>
                        </g>
                      </motion.svg>
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-start-2 row-start-1 col-end-3 row-end-3">
          <div className="px-[18px] py-9 grid flex-grow grid-rows-[810.734px] grid-cols-[540px]">
            <motion.div
              className="col-start-1 row-start-1 col-end-2 row-end-2"
              ref={imageRef}
              style={{ y: imageY }}
            >
              <Image
                src="https://static.wixstatic.com/media/c837a6_31ea8dd4c6d34c52b09e20e0bf71aa14~mv2.jpg/v1/fill/w_1080,h_1622,fp_0.29_0.44,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hote_Lobby.jpg"
                width={540}
                height={811}
                alt="Fancy vase"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
