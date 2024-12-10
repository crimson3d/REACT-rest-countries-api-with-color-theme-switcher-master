import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import InputSearch from "./components/InputSearch.jsx";
import MenuContinent from "./components/MenuContinent.jsx";
import FetchData from "./components/FetchData.jsx";
import DataResults from "./components/DataResults.jsx";
import Header from "./components/header.jsx";
import DetailPage from "./components/DetailPage.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";

const App = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState("");

  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(allData);
      setError("");
      return;
    }

    const filteredResults = allData.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredResults.length > 0) {
      setFilteredData(filteredResults);
      setError("");
    } else {
      setFilteredData([]);
      setError("Sorry, we can't find the country");
    }
  };

  const handleFilterByContinent = (continent) => {
    if (continent === "Filter by Region") {
      setFilteredData(allData);
    } else {
      const filteredResults = allData.filter((country) =>
        country.region.includes(continent)
      );
      setFilteredData(filteredResults);
    }
  };

  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="root__content">
              <Header />
              <div className="content__search">
                <FetchData
                  onFetchComplete={(data) => {
                    setAllData(data);
                    setFilteredData(data);
                  }}
                />
                <InputSearch onFilter={handleFilter} error={error} />
                <MenuContinent
                  allData={allData}
                  onFilterByContinent={handleFilterByContinent}
                />
              </div>
              <div className="content__results">
                <DataResults allData={filteredData} />
              </div>
            </div>
          }
        />
        <Route path="/details/:id" element={<DetailPage allData={allData} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
