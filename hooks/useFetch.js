import { useState } from "react";

export const useFetch = (url, query) => {
  const [response, setResponse] = useState();

  const fetchData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setResponse(res);
  };

  return { response, fetchData };
};
