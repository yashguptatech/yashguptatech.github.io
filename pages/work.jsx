import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Layout from "../components/Layout";
import data from "../data.json";

const Project = ({ project }) => (
  <div className="max-w-[250px] text-center text-primary dark:text-primary-dark">
    <a
      href={project.link}
      title={`${project.name} link`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-[250px] h-[130px] bg-background1-dark/20 dark:bg-background1/20 overflow-hidden  rounded-3xl">
        <Image
          src={`/projects/${project.image}`}
          alt={project.name}
          width="250px"
          height="130px"
        />
      </div>
    </a>
    <div className="text-[22px] font-title font-extrabold">{project.name}</div>
    <div className="text-[15px]">{project.description}</div>
  </div>
);

const Works = ({ header, projects }) => {
  const [darkModeActive, setDarkModeActive] = useState(true);
  return (
    <>
      <Head>
        <title>My Work and Projects</title>
      </Head>
      <Layout
        darkMode={darkModeActive}
        onClick={setDarkModeActive}
        header={header}
      >
        <article className="min-w-[400px] max-w-[770px] px-4 mx-auto pb-24 ">
          <main className=" w-full flex flex-col items-center gap-8">
            <h2 className="font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible mt-8 text-center">
              My Work
            </h2>
            <section className="w-[80%] flex flex-row flex-wrap gap-8 justify-evenly">
              {projects.myProjects.map((project, i) => (
                <Project key={i} project={project} />
              ))}
            </section>
            <h2 className="font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible mt-8 text-center">
              Industry Projects
            </h2>
            <section className="w-[80%] h-auto flex flex-row flex-wrap gap-8 justify-evenly">
              {projects.Industry_Projects.map((project,i) => (
                <Project key={i} project={project} />
              ))}
            </section>
            {/*<h2 className="font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible mt-8 text-center">
              Open Source Contributions
            </h2>
            <section className="w-[80%] h-auto flex flex-row flex-wrap gap-8 justify-evenly">
              {projects.openSource.map((project,i) => (
              <Project key={i} project={project} />
              ))}
            </section>*/}
          </main>
        </article>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { ...data },
  };
}

export default Works;
