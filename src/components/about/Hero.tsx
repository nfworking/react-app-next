"use client";
import ArrowWIcon from '../about/assets/icons/arrow-w.svg';
import cursorImage from '../about/assets/images/cursor.png'
import messageImage from '../about/assets/images/message.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="bg-black text-white py-[172px] bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72PX] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE]
    bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top[calc(100%-120px)]"></div>
      <div className="relative container">
        <div className="flex items-center justify-center mt-8">
        <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"> 
        <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent [-webkit-background-clip:text]">Version 2.0 is here</span>
        <span className="inline-flex items-center gap-1">
        <span>Read More</span>
        <ArrowWIcon />
        </span>        
         </a>
        </div> 
        <div className="flex justify-center">      
          <div className="inline-flex relative">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-lighter text-center inline-flex mt-12">One Task <br />
         at a time
         </h1>
         <motion.div className="absolute right-[570px] top-[200px] hidden sm:inline "
         drag
         dragSnapToOrigin
         >
         <Image src={cursorImage} height="200" width="200" alt=""  draggable="false" className="max-w-none" />
         </motion.div>
         <motion.div drag dragSnapToOrigin className="absolute left-[600px] top-[56px] hidden sm:inline">
         <Image src={messageImage} height="200" width="200"  draggable="false" className="max-w-none" alt="" />
         </motion.div>
         </div>
         </div>  
         <div className="flex justify-center">  
        <p className="text-center text-xl mt-8 max-w-lg">Celebrate the simplicity of an app that is faster than ever
        that can ease you development workload.
        </p>
        </div>
        <div className="flex justify-center mt-8">
        <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get for free</button>
  
    </div>
    </div>
  </div>

  ) 
};
