import Link from "next/link";
import React from "react";

export function CountryCard({ name, population, region, capital, image }) {
  return (
    <>
      <Link href={`/country/${name}`}>
        <div>
          <h3>{name}</h3>
          <div>
            <img src={image} alt={`${name} Flag`} />
            <span>Population: {population}</span>
            <span>Region: {region} </span>
            <span>Capital:{capital} </span>
          </div>
        </div>
      </Link>
    </>
  );
}
