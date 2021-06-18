import { useContext } from "react";
import { ThemeContext } from "../App";
import { AppTheme } from "../AppTheme";
import Strapline from "./Strapline";
const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const heroStyle: AppTheme = {
    dark: {
      backgroundColor: "#333",
      color: "white",
    },
    light: {
      backgroundColor: "#eee",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
      height: "1400px",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? heroStyle.light : heroStyle.dark),
    ...heroStyle.common,
  };
  return (
    <main style={themeStyle}>
      <div>
        <h1>We make great coffee.</h1>
        <Strapline />
      </div>
      <img src="bar.png" alt="" />
    </main>
  );
};

export default Hero;
