import { Color, ICountry } from "./../types";
import { Badge } from "./Badge";

export const CountryItem = ({
 name,
 flags,
 capital,
 population,
 area,
 region,
}: ICountry) => {
 return (
  <li className="list-group-item d-flex justify-content-between align-items-center">
   <img className="col-md-1 float-left" src={flags} alt="List" />
   <span className="col mx-4">{name}</span>
   <span className="col">{capital}</span>
   <span className="col">{region}</span>
   <Badge color={Color.Primary} type={"area"} value={area} />
   <Badge color={Color.Secondary} type={"population"} value={population} />
  </li>
 );
};
