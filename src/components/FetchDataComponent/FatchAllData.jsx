import { use, useState } from "react";
import SelectArray from "../SelectArray/SelectArray";
import AllCard from "../AllCard/AllCard";

export default function FatchAllData({setselectCount, fetchData, troggle, setcoin ,coin}) {
  const all = use(fetchData);
  const [selectArray, setselectArray] = useState([]);
  const handleclick =(id)=>{
    const single = all.find((item)=> item.name === id )
    if(coin < single.price){
      alert("coin is less then current price")
      return
    }
    setcoin( coin - single.price)
    if(selectArray.length === 6){
      alert("you can add only 3 players")
      return
    }
    setselectArray([...selectArray,single])
    setselectCount(selectArray.length + 1)
  }
  const handleDelete =(id)=>{
    const filterArray = selectArray.filter((item)=> item.name !== id.name)
    setcoin( parseInt(coin) + parseInt(filterArray.price))
    setselectArray(filterArray)
    setselectCount(selectArray.length - 1)


  }
  return <>
  {!troggle ? 
  <AllCard handleclick={handleclick} all={all} /> :
   <SelectArray selectArray={selectArray} handleDelete={handleDelete}  />}
  </>;
}
