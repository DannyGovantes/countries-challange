"use client";

import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useForm } from "./hooks/useForm";
const getData = async (query) => {
  const res = await fetch(
    `http://localhost:3000/api/countries/search?${query}`
  );
  const data = await res.json();
};

export function SearchBar() {
  const { onHandleChange, country } = useForm({ country: "" });
  const debouncedValue = useDebounce(country, 500);
  useEffect(() => {
    const query = `query=${country}`;
    getData(query);
  }, [debouncedValue]);

  return (
    <div>
      <form onSubmit={() => {}}>
        <input
          value={country}
          type="text"
          name="country"
          placeholder="Search"
          onChange={onHandleChange}
        />
      </form>
    </div>
  );
}
