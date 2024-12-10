import { useParams, Link } from "react-router-dom";
import Header from "./header";

const DetailPage = ({ allData }) => {
  const { id } = useParams();
  const country = allData.find((item) => item.cca3 === id);


  return (
    <div className="root__content">
      <Header />
      <Link to="/" className="back-button">← Back</Link>
      <div className="details__card">
        <div className="card__img">
          <img className="img__pic" src={country.flags.png} alt={country.flags.alt} />
        </div>
        <div className="card__content">
          <h1 className="content__title">{country.name.common}</h1>
          <div className="content__info">
            <p className="info__item">
              <span className="item__title">Population:</span> {country.population}
            </p>
            <p className="info__item">
              <span className="item__title">Region:</span> {country.region}
            </p>
            <p className="info__item">
              <span className="item__title">Capital:</span> {country.capital ? country.capital[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
