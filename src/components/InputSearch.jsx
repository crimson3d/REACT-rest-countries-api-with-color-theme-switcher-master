import { useForm } from "react-hook-form";
import { useContext } from "react";
import SearchIcon from "@/assets/search-icon.svg?react";
import SearchIconDark from "@/assets/search-icon-dark.svg?react";
import { ThemeContext } from "./ThemeContext";

const InputSearch = ({ onFilter, error }) => {
  const { register, handleSubmit } = useForm();
  const { isDarkMode } = useContext(ThemeContext);

  const onSubmit = (data) => {
    onFilter(data.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search__form">
      <input
        type="text"
        {...register("name")}
        className={`form__input ${error ? "form__error" : ""}`}
        placeholder="Search for a country..."
      />
      <button type="submit" className="form__button">
        {isDarkMode ? <SearchIconDark className="button__icon" /> : <SearchIcon className="button__icon" />}
      </button>
      <div className="form__errors">
        {error && <p className="errors__errorMessage">{error}</p>}
      </div>
    </form>
  );
};

export default InputSearch;
