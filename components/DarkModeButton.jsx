import { motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const variants = {
  hidden: { scale: 0, opacity: 0, x: 0, y: 150 },
  enter: { scale: 1, opacity: 1, x: 0, y: 0 },
  exit: { scale: 0, opacity: 0, x: 0, y: 150 },
};

export default function DarkModeButton({ darkMode, onClick }) {
  const switchModes = () => {
    document.querySelector("html").classList.toggle("dark");
    onClick((isActive) => !isActive);
  };
  return (
    <div className="fixed bottom-[1.5rem] md:bottom-[3rem] left-[1.5rem] md:left-[3rem]">
      <motion.div
        initial="hidden"
        animate="enter"
        // exit="exit"
        variants={variants}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <button
          className="flex items-center justify-center w-[4rem] h-[4rem] bg-primary dark:bg-primary-dark text-background1 dark:text-background1-dark cursor-pointer transition-colors hover:bg-#fff rounded-full animate-bounce"
          onClick={switchModes}
          aria-label="Scroll to top"
          type="button"
        >
          {darkMode ? (
            <BsFillSunFill size="3rem" />
          ) : (
            <BsFillMoonStarsFill size="3rem" />
          )}
        </button>
      </motion.div>
    </div>
  );
}
