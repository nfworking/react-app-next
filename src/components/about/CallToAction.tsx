"use client"
import helixImage from '../about/assets/images/helix2.png'
import emojiStarImage from '../about/assets/images/emojistar.png'
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useTransform, motion } from 'framer-motion';


export const CallToAction = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],  
  });

  useEffect(() => {
    scrollYProgress.on("change", (value) => console.log("value", value));
  }, []);
  const translateY = useTransform(scrollYProgress, [0, 1], [40 ,-80]); 

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div
        style={{ translateY }}        
        >
        <Image src={helixImage} alt="" className="absolute top-6 left-[calc(100%+36px)] translate-y-28" />
        </motion.div>
        <motion.div
        style={{ translateY }}        
        >
        <Image src={emojiStarImage} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]" />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get Instant Access</h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your 
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input placeholder="your@email.com" className="email h-12 bg-white/20 px-5 rounded-lg font-medium sm:flex-1 "/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Access</button>
        </form>
      </div>
    </div>
  )
};
