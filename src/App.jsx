import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InputSearch from "./components/InputSearch.jsx";
import MenuContinent from "./components/MenuContinent.jsx";
import FetchData from "./components/FetchData.jsx";
import DataResults from "./components/DataResults.jsx";
import Header from "./components/Header.jsx";
import DetailPage from "./components/DetailPage.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { HelmetProvider, Helmet } from "react-helmet-async";

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
    <HelmetProvider>
      <ThemeProvider>
      <Helmet>
        
        <title>Where in the world?</title>
        <meta name="A cool API rest practique with countries" content="" />

        
        <meta property="og:url" content="https://simple-countries.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Where in the world?" />
        <meta property="og:description" content="" />
        <meta property="og:image"
        content="https://opengraph.b-cdn.net/production/images/ccce27b1-ef67-4cf1-8a29-89e5a38b26ea.png?token=dBEbqcIkJigIkFDBxdpcBduDetRUT4C_CMFpFDPcjtM&height=675&width=1200&expires=33269999001" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="simple-countries.netlify.app" />
        <meta property="twitter:url" content="https://simple-countries.netlify.app/" />
        <meta name="twitter:title" content="Where in the world?" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/ccce27b1-ef67-4cf1-8a29-89e5a38b26ea.png?token=dBEbqcIkJigIkFDBxdpcBduDetRUT4C_CMFpFDPcjtM&height=675&width=1200&expires=33269999001" />
      </Helmet>
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
          <Route
            path="/details/:id"
            element={<DetailPage allData={allData} />}
          />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
