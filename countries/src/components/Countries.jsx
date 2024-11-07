// import React from "react";

import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";

const Countries = () => {
  const [countryLists, setCountryLists] = useState([]);
  const apiData = "https://xcountries-backend.azurewebsites.net/all";

  useEffect(() => {
    fetch(apiData)
      .then((res) => res.json())
      .then((data) => setCountryLists(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {countryLists.map(({ abbr, name, flag }) => {
        return <CountryCard key={abbr} name={name} flag={flag} />;
      })}
    </div>
  );
};

export default Countries;
