import { NextSeo } from "next-seo";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Yash Gupta's Portfolio"
        description="The personal portfolio website for Yash Gupta, Software and QA Engineer, but most of all an avid learner."
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "",
          description:
            "The personal portfolio website for Yash Gupta, Software and QA Engineer, but most of all an avid learner.",
          site_name: "Yash Gupta",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
