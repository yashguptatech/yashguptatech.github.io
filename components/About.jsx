import Image from "next/image";

const About = ({about}) => {
  return (
    <section className="relative">
      <article
        className="flex flex-col lg:px-48 mx-auto w-[calc(100vw-32px)] lg:w-auto max-w-[1040px] box-content relative overflow-visible"
        id="about"
      >
        <div className="w-[32px] md:w-[48px] lg:w-[64px] h-[2px] md:h-[4px] lg:h-[6px] my-[2rem] lg:my-[4rem] rounded-[10px] bg-primary dark:bg-primary-dark" />
        <h2 className="relative w-full font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[48px] lg:leading-[56px] h-[40px] md:h-[48px] lg:h-[56px] max-w-[100%] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible">
          About Me
          <img  
            src={about.image}
            alt="my picture"
            className="absolute right-[10px] xl:right-[-100px] top-[-55px] xl:top-0 h-[100px] xl:h-[300px] rounded-[50%] border-2 xl:border-8 border-background1-dark dark:border-background1"
          />
        </h2>
        <p className="max-w-[670px] lg:max-w-[800px] text-[14px] md:text-[18px] lg:text-[22px] leading-[24px] md:leading-[32px] lg:leading-[36px] text-primary dark:text-primary-dark font-[300] pb-[3.6rem]">
          {about.info}
        </p>
      </article>
    </section>
  );
};

export default About;
