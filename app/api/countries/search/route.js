import { NextResponse } from "next/server";
import countries from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const continent = searchParams.get("continent") || "";
  const curatedData = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(query.toLocaleLowerCase()) &&
      country.region.toLowerCase().includes(continent.toLocaleLowerCase())
    );
  });

  return NextResponse.json(curatedData);
}
