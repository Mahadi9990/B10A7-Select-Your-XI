import { use } from "react";
import SelectArray from "../SelectArray/SelectArray";
import AllCard from "../AllCard/AllCard";

export default function FatchAllData({ fetchData, troggle }) {
  const all = use(fetchData);
  return <>
  {!troggle ? <AllCard all={all} /> : <SelectArray />}
  </>;
}
