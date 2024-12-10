import { useContext } from "react";
import MoonLight from "@/assets/moon-lightsvg.svg?react";
import MoonLightDark from "@/assets/moon-darksvg.svg?react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="content__top">
      <h1 className="top__title">Where in the world?</h1>
      <div className="top__modeSelector" onClick={toggleTheme}>
        {isDarkMode ? <MoonLightDark className="modeSelector__logo" /> : <MoonLight className="modeSelector__logo" />}
        <p className="modeSelector__text">{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </header>
  );
};

export default Header;
