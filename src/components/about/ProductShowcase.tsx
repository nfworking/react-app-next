"use client";

import appScreen from "../about/assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { use, useRef } from "react";
import { useEffect } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const {scrollYProgress} = useScroll({
    target: appImage,
    offset: 
      ["start end", "end end"],  
  });
useEffect(() => {
  scrollYProgress.on('change', (latestValue) => console.log('latestValue', latestValue));
}, []);
const rotateX = useTransform(scrollYProgress, [0, 1], [15 ,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [0.5 ,1]);
    
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter" >Intuitive interface</h2> 
        <div className="max-w-xl mx-auto">       
        <p className="text-xl text-center text-white/70 mt-5">Enhance your productivity by connecting with your tools, keeping your essentials in one place.</p>
        </div>
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",
        }}
        >
        <Image src={appScreen} ref={appImage}  alt="The product screenshop" className="mt-14" />
        </motion.div>
      </div>
    </div>
  )
};
