import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DataResults = ({ allData }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(allData);
  }, [allData]);

  return (
    <main className="results__items">
      {results.length > 0
        ? results.map((result) => (
            <div key={result.cca3} className="results__card">
              <Link to={`/details/${result.cca3}`}>
                <div className="card__img">
                  <img
                    className="img__pic"
                    src={result.flags.png}
                    alt={result.flags.alt}
                  />
                </div>
                <div className="card__content">
                  <h2 className="content__title">{result.name.common}</h2>
                  <div className="content__info">
                    <p className="info__item">
                      <span className="item__title">Population:</span>
                      {result.population}
                    </p>
                    <p className="info__item">
                      <span className="item__title">Region:</span>
                      {result.region}
                    </p>
                    <p className="info__item">
                      <span className="item__title">Capital:</span>
                      {result.capital ? result.capital[0] : "N/A"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : ""}
    </main>
  );
};

export default DataResults;
