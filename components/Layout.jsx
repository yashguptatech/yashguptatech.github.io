import { motion } from "framer-motion";
import DarkModeButton from "./DarkModeButton";
import Header from './Header';
import ScrollToTop from "./ScrollToTop";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, darkMode, onClick, header }) => {
  return (
    <div className="max-w-[1280px] w-full min-h-screen h-max m-auto relative">
      <Header header={header} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 0.8 }}
      >
        {children}
      </motion.main>
      <footer
        className="text-accent-dark/40 text-xl w-full text-center absolute bottom-[20px]"
      >
        © 2022 {header.name}. All Rights Reserved.
      </footer>
      <ScrollToTop />
      <DarkModeButton darkMode={darkMode} onClick={onClick} />
    </div>
  );
};

export default Layout;
