import { Suspense } from "react";
import FatchAllData from "../components/FetchDataComponent/FatchAllData";

const fetchAllData = async () => {
  const res = await fetch("/allObject.json");
  return res.json();
};
export default function Main() {
  const fetchData = fetchAllData();
  return (
    <div>
      
      <Suspense
        fallback={
          <div>
             <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <FatchAllData fetchData={fetchData} />
      </Suspense>
    </div>
  );
}
