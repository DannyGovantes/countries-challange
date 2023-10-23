import React from "react";
import { CountriesContext } from "./CountriesContext";

export function CountriesProvider({ children }) {
  return <CountriesContext>{children}</CountriesContext>;
}
