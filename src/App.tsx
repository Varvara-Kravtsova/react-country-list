import React from "react";
import countryData from "./country-data.json";
import { ICountry } from "./types/index";
import { CountryList } from "./components/CountryList";

function App() {
 const countries: ICountry[] = countryData.map((country) => ({
  name: country.name.common,
  flags: country.flags.svg,
  capital: country.capital[0],
  region: country.region,
  area: country.area,
  population: country.population,
 }));

 return (
  <div className="container">
   <h1 className="py-3">Country List</h1>
   <CountryList countries={countries} />
  </div>
 );
}

export default App;
