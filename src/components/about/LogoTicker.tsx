"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import acmeLogo from "../about/assets/images/acme.png";
import quantumLogo from "../about/assets/images/quantum.png";
import echoLogo from "../about/assets/images/echo.png";
import celestialLogo from "../about/assets/images/celestial.png";
import pulseLogo from "../about/assets/images/pulse.png";
import apexLogo from "../about/assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];




export const LogoTicker = () => {
  return ( 
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams</h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full 
        after:h-full before:w-5 after:w-80 relative
        after:right-0 before:left-0
         before:top-0 after:top-0  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] ">
          <motion.div
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0}}
          animate={{ translateX: "-50%"}}
          className="flex gap-16 flex-none pr-16 ">
          {images.map(({ src, alt }) => (
          <Image 
          src={src} 
          alt={alt} 
          key={alt}
          className="flex-none h-8 w-auto" />
          ))} 
          {images.map(({ src, alt }) => (
          <Image 
          src={src} 
          alt={alt} 
          key={alt}
          className="flex-none h-8 w-auto" />
          ))} 
          </motion.div>
        </div>
        </div>
      </div>
    
  )}
