import { CountryItem } from "./CountryItem";
import { ICountry } from "../types";

interface ICountryList {
 countries: ICountry[];
}

export const CountryList = ({ countries }: ICountryList) => {
 return (
  <ul className="list-group">
   {countries.map((country) => (
    <CountryItem key={country.name} {...country} />
   ))}
  </ul>
 );
};
