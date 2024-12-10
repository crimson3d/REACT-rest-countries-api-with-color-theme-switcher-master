import { useState, useEffect } from "react";

const FetchData = ({ onFetchComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const rawData = await response.json();
        onFetchComplete(rawData); // Pasa los datos recuperados al componente principal
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching the data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="fetching__error">{error}</div>;
  }

  return null; // No renderiza nada porque solo se encarga de la lógica de fetch
};

export default FetchData;
