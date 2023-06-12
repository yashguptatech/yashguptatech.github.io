import { FaSchool, FaUniversity } from "react-icons/fa";

const EducationCard = ({ icon, course, institution, duration, gpa }) => (
  <div className="flex flex-row max-w-[450px] min-h-[110px] m-2 p-4 bg-primary-[0.1%] bg-primary/[0.05] dark:bg-primary-dark/[0.03] rounded-[10px] items-center gap-8">
    <span>
      {icon === "school" ? <FaSchool size="6rem" /> : ""}
      {icon === "university" ? <FaUniversity size="6rem" /> : ""}
    </span>
    <span className="flex-grow flex flex-col justify-center">
      <h4 className="font-bold font-title text-[18px] lg:text-[22px] text-primary dark:text-primary-dark">
        {course}
      </h4>
      <h5 className="font-bold font-title text-[16px] lg:text-[20px] text-primary/60 dark:text-primary-dark/60">
        {institution}
      </h5>
      <span className="flex justify-between font-title text-[14px] lg:text-[18px] text-primary/50 dark:text-primary-dark/50 pr-8">
        {duration} <span>{gpa}</span>
      </span>
    </span>
  </div>
);

const Education = ({ education }) => {
  return (
    <section>
      <article
        className="flex flex-col lg:px-48 mx-auto w-[calc(100vw-32px)] lg:w-auto max-w-[1040px] box-content   "
        id="about"
      >
        <div className="w-[32px] md:w-[48px] lg:w-[64px] h-[2px] md:h-[4px] lg:h-[6px] my-[2rem] lg:my-[4rem] rounded-[10px] bg-primary dark:bg-primary-dark" />
        <h2 className="relative w-full font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[48px] lg:leading-[56px] h-[40px] md:h-[48px] lg:h-[56px] max-w-[100%] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible">
          Education
        </h2>
        <div className=" pb-[3.6rem] flex flex-wrap">
          {education.map((ed, i) => (
            <EducationCard key={i} {...ed} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Education;
