"use client";

import { useEffect, useState } from "react";
import { CountryCard } from "./components";

export default function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch("http://localhost:3000/api/countries");
      const data = await res.json();
      setCountries(data);
    };
    getCountries();
  }, []);
  return (
    <>
      <div>
        {countries?.map((country) => {
          return (
            <CountryCard
              key={country.name}
              name={country.name}
              capital={country.capital}
              population={country.population}
              region={country.region}
              image={country.flag}
            />
          );
        })}
      </div>
    </>
  );
}
