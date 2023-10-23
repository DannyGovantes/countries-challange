"use client";
import React from "react";
import { CountryCard } from ".";

export function CountriesWrapper({ countries }) {
  return (
    <>
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
    </>
  );
}
