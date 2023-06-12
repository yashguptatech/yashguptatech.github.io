/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      title: ['"Space Grotesk"', "sans-serif"],
      main: ["system-ui", "sans-serif"],
    },
    screens: {
      sm: "482px",
      md: "642px",
      lg: "770px",
      xl: "1026px",
    },
    colors: {
      primary: {
        DEFAULT: "#17181F",
        dark: "#EEEDF0",
      },
      background1: {
        DEFAULT: "#efefef",
        dark: "#1f202e",
      },
      accent: {
        DEFAULT: "#6C72CB",
        dark: "#6C72CB",
      },
      button: {
        DEFAULT: "hsl(205.1,100%,36.1%)",
        dark: "hsl(205.1,100%,36.1%)",
      },
      background2: {
        DEFAULT: "#CB69C1",
        dark: "#CB69C1",
      },
      bgContrast: {
        DEFAULT: "#fff",
        dark: "#17181F",
      },
      headingFirstGradientColor: {
        DEFAULT: "#CB69C1",
        dark: "#fff",
      },
      icons: {
        DEFAULT: "#17181F",
        dark: "#fff",
      },
      bodyBgColor: {
        DEFAULT: "#f7f7f7",
        dark: "#17181F",
      },
      shadow: {
        DEFAULT: "rgba(0,0,0,0.3)",
        dark: "rgba(255,255,255,0.3)",
      },
      svgTimeline: {
        DEFAULT: "#CB69C1",
        dark: "#fff",
      },
      filterBtnBgColor: {
        DEFAULT: "#efefe",
        dark: "#21222",
      },
    },
  },
};
