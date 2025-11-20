"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import MotionCards from "./MotionCards";

const Home = () => {
  const [scope, animate] = useAnimate();
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, [animate]);

  return (
    <div
      className="flex w-full h-full min-h-[600px] justify-center items-center bg-black overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          filter: isImageExpanded ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="text-white pb-5 text-xl">CALEB BAE</div>
        <div className="z-50">
          <GooeyText
            texts={[
              "You",
              "Should",
              "Hire",
              "This",
              "Guy",
            ]}
            morphTime={2}
            cooldownTime={0.25}
            className="font-bold"
            textClassName="text-white font-calendas italic text-5xl md:text-7xl"
          />
        </div>
        <div className="z-50 mt-10 flex items-center gap-4">
          {/* <p className="text-xs hover:scale-110 transition-transform bg-white text-black rounded-full py-2 w-20 text-center cursor-pointer">
            Contact
          </p> */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/baecal000"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/icons/brand-linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 invert"
              />
            </a>
            <a
              href="https://github.com/balebbae"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/icons/brand-github.svg"
                alt="GitHub"
                className="w-6 h-6 invert"
              />
            </a>
            <a
              href="mailto:baecal000@gmail.com"
              aria-label="Email"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/icons/mail.svg"
                alt="Email"
                className="w-6 h-6 invert"
              />
            </a>
            <a
              href="https://www.instagram.com/baesfilm"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/icons/brand-instagram.svg"
                alt="Instagram"
                className="w-6 h-6 invert"
              />
            </a>
          </div>
        </div>
      </motion.div>
      <MotionCards onExpandChange={setIsImageExpanded} />
    </div>
  );
};

export { Home };
