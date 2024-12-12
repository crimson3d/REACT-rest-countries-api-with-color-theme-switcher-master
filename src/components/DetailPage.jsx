import { useParams, Link } from "react-router-dom";
import Header from "./Header";

const DetailPage = ({ allData }) => {
  const { id } = useParams();
  const country = allData.find((item) => item.cca3 === id);
  const languageCode = country ? Object.keys(country.name.nativeName)[0] : null;
  const nativeCommonName = languageCode
    ? country.name.nativeName[languageCode].common
    : "N/A";
  const currencyCode = country ? Object.keys(country.currencies)[0] : null;
  const countryCurrency = currencyCode
    ? country.currencies[currencyCode].name
    : "N/A";
  const languagesArray = [];

  for (const key in country.languages) {
    if (country.languages.hasOwnProperty(key)) {
      languagesArray.push(country.languages[key]);
    }
  }

  const languagesString = languagesArray.join(", ");

  const borderCommonNames = (country.borders || []).map((border) => {
    const borderCountry = allData.find((item) => item.cca3 === border);
    return (
      <span key={border} className="item__content">
        {borderCountry ? borderCountry.name.common : "null"}
      </span>
    );
  });

  return (
    <div className="root__content">
      <Header />
      <Link to="/" className="content__backButton">
        ← Back
      </Link>
      <div className="content__detail">
        <div className="detail__img">
          <img
            className="img__pic"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
        <div className="detail__content">
          <h1 className="content__title">{country.name.common}</h1>
          <div className="content__middle">
            <div className="middle__left">
              <p className="left__item">
                <span className="item__title">Native Name:</span>{" "}
                {nativeCommonName}
              </p>
              <p className="left__item">
                <span className="item__title">Population:</span>{" "}
                {country.population}
              </p>
              <p className="left__item">
                <span className="item__title">Region:</span> {country.region}
              </p>
              <p className="left__item">
                <span className="item__title">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p className="left__item">
                <span className="item__title">Capital:</span>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>
            </div>
            <div className="middle__right">
              <p className="right__item">
                <span className="item__title">Top Level Domain:</span>{" "}
                {country.tld}
              </p>
              <p className="right__item">
                <span className="item__title">Currencies:</span>{" "}
                {countryCurrency}
              </p>
              <p className="right__item">
                <span className="item__title">Languages:</span>{" "}
                {languagesString}
              </p>
            </div>
          </div>
          {borderCommonNames.length > 0 ? (
            <div className="content__bottom">
              <p className="bottom__item">
                <span className="item__title">Border Countries:</span>{" "}
                {borderCommonNames}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
