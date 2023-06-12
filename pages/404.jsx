import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 2.5,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const NotFound = () => {
  return (
    <section className="flex flex-col min-h-[100vh] justify-center items-center px-48 mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden ">
      <motion.figure
        style={{ marginBottom: "6em" }}
        animate={{ scale: 1.25 }}
        transition={{ type: "tween", stiffness: 100, delay: 0.15 }}
      >
        <Image
          src="/broken-mug.png"
          width="400"
          height="400"
          alt="broken-mug"
        />
      </motion.figure>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ textAlign: "center" }}
      >
        <h1
          className="font-[800] text-[32px] leading-[40px] w-max max-w-[100%] mb-[8px] md:text-[48px] md:leading-[48px] md:mb-[12px] lg:text-[56px] lg:leading-[56px] lg:mb-[16px]"
          variants={item}
        >
          This Page is Broken
        </h1>
        <p
          className="max-w-[672px] lg:max-w-[800px] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[25px] lg:leading-[32px] text-primary dark:text-primary-dark"
          variants={item}
        >
          Return to home page?
          <Link href="/">
            <a
              className="ml-[5px] cursor-pointer underline-offset-[0.2em] hover:underline-offset-[0.4em] hover:decoration-primary dark:hover:decoration-primary-dark"
              style={{
                textDecoration: "underline 0.15em rgba(255, 255, 255, 0)",
                transition:
                  "text-decoration-color 300ms, text-underline-offset 300ms",
              }}
              title="Go to home page"
            >
              Go back home
            </a>
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;
