import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons"; 
export default function Card({ singleCard }) {
  return (
    <div className="p-5 shadow-2xl rounded-2xl border-2 border-black sm:w-[70%] md:w-full mx-auto">
      <div>
        <img
          className="w-full h-70"
          src={singleCard.image}
          alt={singleCard.image}
        />
      </div>
      <div className="flex justify-stard items-center py-2">
        <span className="pr-3"><FontAwesomeIcon icon={faCircleUser} size="xl" /></span>
        <h1 className="text-xl font-bold">{singleCard.name}</h1>
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-start itmes-center">
            <FontAwesomeIcon className=" opacity-40" icon={faFlag} size="xl" /><span className="opacity-45 ps-2">{singleCard.country}</span>
        </div>
      </div>
      <div className="pt-5 font-bold">Rating : {singleCard.rating}</div>
      <div className="flex justify-between items-center py-2">
        <p className="text-xs">Bating Style:{singleCard.battingRole}</p>
        <p className="text-xs">Bowling Style:{singleCard.battingRole}</p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Price: $<span className="font-normal">{singleCard.price}</span></h1>
        <button className="btn">Choose Player</button>
      </div>
    </div>
  );
}
