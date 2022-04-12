import { BadgeLable, Color } from "../types";

interface IBadge {
 color: Color;
 type: BadgeLable;
 value: number;
}

export const Badge = ({ color, type, value }: IBadge) => {
 return (
  <span className={`badge col px-1 py-2 mx-2 bg-${color}`}>
   {type}: {value}
  </span>
 );
};
