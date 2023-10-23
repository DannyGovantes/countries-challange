"use client";

import { useEffect, useState } from "react";
import { CountriesWrapper, DropDown, SearchBar } from "./components";

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
        <div>
          <SearchBar />
          <DropDown />
        </div>
        <CountriesWrapper countries={countries} />
      </div>
    </>
  );
}
