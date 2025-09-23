import { use, useState } from "react";
import SelectArray from "../SelectArray/SelectArray";
import AllCard from "../AllCard/AllCard";

export default function FatchAllData({ fetchData, troggle, setcoin ,coin}) {
  const all = use(fetchData);
  const [selectArray, setselectArray] = useState([]);
  const handleclick =(id)=>{
    const single = all.find((item)=> item.name === id )
    setcoin( coin - single.price)
    setselectArray([...selectArray,single])
  }
  const handleDelete =(id)=>{
    const findForDelete = selectArray.find((item)=> item.name === id )
    console.log(findForDelete)
    const filterArray = selectArray.filter((item)=> item.name !== id)
    console.log(filterArray)
    setcoin( coin + parseInt(findForDelete.price))
    setselectArray([...selectArray,filterArray])

  }
  return <>
  {!troggle ? 
  <AllCard handleclick={handleclick} all={all} /> :
   <SelectArray selectArray={selectArray} handleDelete={handleDelete}  />}
  </>;
}
