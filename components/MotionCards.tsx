import React, { useEffect, useState } from "react";
import Floating, { FloatingElement } from "./ui/parallax-floating";
import { motion, AnimatePresence } from "motion/react";
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

const images = {
  resume: "/RESUME.webp",
  about: "/ABOUTME.webp",
  experience: "/EXPERIENCE.webp",
  projects: "/PROJECTS.webp",
  beach: "/z5_11zon.webp",
  bird: "/z6_11zon.webp",
  flower: "/z8_11zon.webp",
  sd: "/z9_11zon.webp",
  sunset: "/z10_11zon.webp",
  garden: "/z11_11zon.webp",
};

interface MotionCardsProps {
  onExpandChange?: (isExpanded: boolean) => void;
}

const MotionCards = ({ onExpandChange }: MotionCardsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSmallView, setIsSmallView] = useState(false);
  const [showWhitePanel, setShowWhitePanel] = useState(false);

  useEffect(() => {
    const update = () => {
      const smallView =
        typeof window !== "undefined" && window.innerWidth < 768;
      setIsSmallView(Boolean(smallView));
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsExpanded(true);
    onExpandChange?.(true);
    setShowWhitePanel(Boolean(isSmallView));
  };

  const handleClose = () => {
    setIsExpanded(false);
    onExpandChange?.(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isExpanded) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isExpanded]);

  const renderDetailsBody = () => {
    if (!selectedImage) return null;
    if (selectedImage === images["resume"]) {
      return <Resume />;
    }

    if (selectedImage === images["about"]) {
      return <About />;
    }

    if (selectedImage === images["projects"]) {
      return <Projects />;
    }

    if (selectedImage === images["experience"]) {
      return <Experience />;
    }

    // Fallback: show the image when no structured content exists
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="max-w-[92vw] w-full">
          <img
            src={selectedImage}
            alt="Detail view"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Background blur overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Expanded view */}
      <AnimatePresence>
        {isExpanded && selectedImage && (
          <>
            {isSmallView ? (
              <>
                <button
                  className="fixed top-4 right-4 z-[60] rounded-full bg-white/90 text-black px-4 py-2 text-sm shadow hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWhitePanel((v) => !v);
                  }}
                >
                  {showWhitePanel ? `View Image` : "View Details"}
                </button>
                {showWhitePanel ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-white overflow-auto"
                    onClick={handleClose}
                  >
                    <div
                      className="w-full h-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {renderDetailsBody()}
                    </div>
                  </motion.div>
                ) : (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={handleClose}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-[95vw]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={selectedImage}
                        alt="Expanded view"
                        className="w-full h-auto object-contain"
                        onClick={handleClose}
                      />
                    </motion.div>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Enlarged image on left half, centered */}
                <div
                  className="fixed left-0 top-0 z-50 w-1/2 h-full flex items-center justify-center"
                  onClick={handleClose}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: -100 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-[28vw] max-w-none md:w-[30vw]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedImage}
                      alt="Expanded view"
                      className="w-full h-auto object-cover cursor-pointer"
                      onClick={handleClose}
                    />
                  </motion.div>
                </div>

                {/* White slide from right */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed right-0 top-0 z-50 w-1/2 h-full bg-white shadow-2xl overflow-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {renderDetailsBody()}
                </motion.div>
              </>
            )}
          </>
        )}
      </AnimatePresence>

      <Floating sensitivity={-0.3} className="w-full h-full overflow-hidden">
        <FloatingElement
          depth={0.5}
          className={`${
            isSmallView ? "top-[8%] left-[10%]" : "top-[14%] left-[15%]"
          } z-10`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(150px,20vw,310px)] aspect-[5/3] hover:scale-105 duration-200 cursor-pointer transition-transform"
            onClick={() => handleImageClick(images["resume"])}
          >
            <img
              src={images["resume"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={0.5}
          className={`${
            isSmallView ? "top-[8%] left-[62%]" : "top-[11%] left-[57%]"
          } z-10`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(100px,20vw,270px)] aspect-[8/5] hover:scale-105 duration-200 cursor-pointer transition-transform "
            onClick={() => handleImageClick(images["about"])}
          >
            <img
              src={images["about"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={2}
          className={`${
            isSmallView ? "top-[24%] left-[11%]" : "top-[76%] left-[68%]"
          } z-10`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(180px,23vw,280px)] aspect-[5/3] hover:scale-105 duration-200 cursor-pointer transition-transform "
            onClick={() => handleImageClick(images["experience"])}
          >
            <img
              src={images["experience"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={2}
          className={`${
            isSmallView ? "top-[22%] left-[68%]" : "top-[63%] left-[35%]"
          } z-10`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(60px,20vw,200px)] aspect-[5/8] hover:scale-105 duration-200 cursor-pointer transition-transform "
            onClick={() => handleImageClick(images["projects"])}
          >
            <img
              src={images["projects"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>

        {/* ===================================== */}
        <FloatingElement
          depth={1}
          className={`${
            isSmallView ? "top-[80%] left-[45%]" : "top-[19%] left-[78%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(40px,18vw,180px)] aspect-[3/3] duration-200 transition-transform "
          >
            <img
              src={images["garden"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={1}
          className={`${
            isSmallView ? "top-[65%] left-[45%]" : "top-[68%] left-[50%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(60px,20vw,200px)] aspect-[3/3] duration-200 transition-transform "
          >
            <img
              src={images["flower"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={3}
          className={`${
            isSmallView ? "top-[83%] left-[15%]" : "top-[16%] left-[41%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(60px,22vw,220px)] aspect-[4/3] duration-200 transition-transform "
          >
            <img
              src={images["sd"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={2}
          className={`${
            isSmallView ? "top-[85%] left-[72%]" : "top-[68%] left-[18%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(40px,18vw,200px)] aspect-[3/3] duration-200 transition-transform "
          >
            <img
              src={images["sunset"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={3}
          className={`${
            isSmallView ? "top-[68%] left-[10%]" : "top-[43%] left-[15%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(100px,26vw,320px)] aspect-[5/3] duration-200 transition-transform "
          >
            <img
              src={images["beach"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
        <FloatingElement
          depth={2}
          className={`${
            isSmallView ? "top-[65%] left-[72%]" : "top-[43%] left-[70%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[clamp(40px,18vw,180px)] aspect-[5/8] duration-200 transition-transform "
          >
            <img
              src={images["bird"]}
              alt="Floating image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default MotionCards;
