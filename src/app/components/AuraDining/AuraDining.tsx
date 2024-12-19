"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { FC } from "react";
import { useRef } from "react";

const ImageCard: FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
}> = ({ src, alt, width, height, label }) => (
  <div className="flex flex-col p-8 sm:px-[108px] sm:pb-[135px]">
    <div className="mb-6">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
    <div className="w-[300px]">
      <p className="italic leading-[20px] text-base">{label}</p>
    </div>
  </div>
);

const AuraDining: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end 30%"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [400, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section className="h-[1505px] p-4 grid grid-cols-2 grid-rows-[62%_38%] bg-auraBg">
      {/* Left Section */}
      <div className="flex flex-col bg-white p-6 sm:p-[153px]">
        <div className="self-center flex flex-col">
          <h2 className="font-normal text-2xl mb-36">Restaurant & Bar</h2>
          <p className="font-normal text-5xl mb-6">
            The Art <br /> of Fine Dining
          </p>
          <p className="w-[304px] font-normal leading-[20px] text-base">
            From locally grown produce to imaginative cocktails, The Tsakhkadé
            serves up an inspired range of dining and drinks.
          </p>
        </div>
      </div>
      {/* Right Top Section */}
      <motion.div className="bg-white">
        <ImageCard
          src="https://static.wixstatic.com/media/c837a6_622edccb97724194a4c90b80e9815be7~mv2.jpg/v1/fill/w_972,h_1366,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Drink_%26_Dine_03.jpg"
          alt="Stunning appetiser shot"
          width={486}
          height={683}
          label="Aura Restaurant"
        />
      </motion.div>
      {/* Left Bottom Section */}
      <motion.div className="bg-white">
        <ImageCard
          src="https://static.wixstatic.com/media/c837a6_1c6101ab26bd4ce39dc24d05df83afe1~mv2.jpg/v1/fill/w_972,h_684,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aura_Restaurant.jpg"
          alt="Barman pouring some extra delicious drink"
          width={486}
          height={342}
          label="Aura Restaurant"
        />
      </motion.div>
      {/* Empty Bottom Right Section */}
      <div className="bg-white"></div>
    </motion.section>
  );
};

export default AuraDining;
