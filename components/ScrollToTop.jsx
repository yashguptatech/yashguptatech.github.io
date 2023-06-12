import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const variants = {
  hidden: { scale: 0, opacity: 0, x: 0, y: 150 },
  enter: { scale: 1, opacity: 1, x: 0, y: 0 },
  exit: { scale: 0, opacity: 0, x: 0, y: 150 },
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-[1.5rem] md:bottom-[3rem] right-[1.5rem] md:right-[3rem]">
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="enter"
          // exit="exit"
          variants={variants}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <button
            className="flex items-center justify-center w-[4rem] h-[4rem] bg-primary dark:bg-primary-dark text-background1 dark:text-background1-dark cursor-pointer transition-colors hover:bg-#fff rounded-full"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            type="button"
          >
            <BiArrowToTop size="3rem" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
