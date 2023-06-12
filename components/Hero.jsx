import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {TbPlayerTrackNext} from "react-icons/tb";

const Intro = ({intro}) => {
  const designations = useRef();
  const typed = useRef();
  useEffect(() => {
    typed.current = new Typed(designations.current, {
      strings: intro.designations,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <section
      id="introText"
      className="flex flex-row justify-center items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden"
    >
      <div className="md:w-[93%] lg:w-[100%] flex flex-col mx-auto lg:px-44 xl:px-0">
        <h2 className="font-title font-[800] text-[26px] md:text-[56px] lg:text-[65px] leading-[32px] md:leading-[56px] lg:leading-[72px] w-max max-w-[100%] pt-[16px] md:pt-[40px] lg:pt-[30px] pb-[8px] md:pb-[12px] lg:pb-[16px] mb-[8px] md:mb-[12px] lg:mb-[16px]">
          Hey, <br />I am Yash Gupta
        </h2>
        <p className="max-w-[670px] lg:max-w-[800px] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[32px] lg:leading-[36px] text-primary dark:text-primary-dark font-[300]">
          <span className="flex gap-4">
            I am a
            <span
              title="my designations"
              className="font-title"
              ref={designations}
            />
          </span>
          {intro.text}
          <br />
          Have a look at my{" "}
          <a
            className="font-medium text-button hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-all rounded-[5px] hover:animate-pulse"
            href={intro.resumeLink}
            title="my resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <Link href={"work"} title="my projects and work experience">
            <a className="group mt-8 flex justify-center items-center h-[30px] md:h-[50px] w-[70px] md:w-[120px] bg-background1-dark dark:bg-background1 text-primary-dark dark:text-primary font-bold transition-all rounded-2xl">
              Works
              <span className="ml-2 animate-pulse hidden group-hover:inline" ><TbPlayerTrackNext/></span>
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Intro;
