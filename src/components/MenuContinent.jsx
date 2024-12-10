import { useState } from "react";
import DownArrow from "@/assets/down-arrow.svg?react";
import DownArrowDark from "@/assets/down-arrow-dark.svg?react";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const MenuContinent = ({ allData, onFilterByContinent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Filter by Region");
  const { isDarkMode } = useContext(ThemeContext);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectContinent = (item) => {
    setSelectedItem(item);
    onFilterByContinent(item);
    setIsOpen(false);
  };

  return (
    <div className="search__menu" onClick={toggleMenu}>
      <span className="menu__title">
        {selectedItem}
      </span>
      {isDarkMode ? <DownArrowDark /> : <DownArrow />}
      {isOpen && (
        <ul className="menu__items">
          <li className="items__item" onClick={() => selectContinent("Africa")}>
            Africa
          </li>
          <li
            className="items__item"
            onClick={() => selectContinent("America")}
          >
            America
          </li>
          <li className="items__item" onClick={() => selectContinent("Asia")}>
            Asia
          </li>
          <li className="items__item" onClick={() => selectContinent("Europe")}>
            Europe
          </li>
          <li
            className="items__item"
            onClick={() => selectContinent("Oceania")}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuContinent;
