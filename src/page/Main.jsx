import { Suspense, useState } from "react";
import FatchAllData from "../components/FetchDataComponent/FatchAllData";
import ButtonArea from "../components/ButtonArea/ButtonArea";
import Loader from "../components/Loader/Loader";

const fetchAllData = async () => {
  const res = await fetch("/allObject.json");
  return res.json();
};
const fetchData = fetchAllData();
export default function Main({setcoin,coin}) {
  const [troggle, settroggle] = useState(false);
  const [selectCount, setselectCount] = useState(0);
  return (
    <div>
      <ButtonArea selectCount={selectCount} troggle={troggle} settroggle={settroggle}/>
      <Suspense
        fallback={
          <Loader/>
        }
      >
        <FatchAllData setselectCount={setselectCount} coin={coin} setcoin={setcoin}  troggle={troggle} settroggle={settroggle} fetchData={fetchData} />
      </Suspense>
    </div>
  );
}
