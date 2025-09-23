import { Suspense, useState } from "react";
import FatchAllData from "../components/FetchDataComponent/FatchAllData";
import ButtonArea from "../components/ButtonArea/ButtonArea";
import Loader from "../components/Loader/Loader";

const fetchAllData = async () => {
  const res = await fetch("/allObject.json");
  return res.json();
};
export default function Main({setcoin,coin}) {
  const fetchData = fetchAllData();
  const [troggle, settroggle] = useState(false);
  
  return (
    <div>
      <ButtonArea troggle={troggle} settroggle={settroggle}/>
      <Suspense
        fallback={
          <Loader/>
        }
      >
        <FatchAllData coin={coin} setcoin={setcoin}  troggle={troggle} settroggle={settroggle} fetchData={fetchData} />
      </Suspense>
    </div>
  );
}
