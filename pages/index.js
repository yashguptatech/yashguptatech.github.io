import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BgAnimation from "../components/BackgroundAnimation";
import About from "../components/About";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
// import Accomplishments from '../components/Accomplishments/Accomplishments';

import data from "../data.json";

const Home = ({ jobs, education, about, intro, header }) => {
  const [darkModeActive, setDarkModeActive] = useState(true);
  return (
    <>
      <Head>
        <title>Yash Gupta</title>
      </Head>
      <Layout
        darkMode={darkModeActive}
        onClick={setDarkModeActive}
        header={header}
      >
        <section
          id="main"
          className="grid items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-2 h-screen top-[-86px]"
        >
          <Hero intro={intro} />
          <BgAnimation darkMode={darkModeActive} />
        </section>
        <About about={about} />
          <WorkExperience jobs={jobs} />
          <Education education={education} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { ...data },
  };
}

export default Home;
