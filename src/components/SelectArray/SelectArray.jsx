import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
export default function SelectArray({selectArray,handleDelete}) {
  return (
    <div className='max-w-[1200px] mx-auto'>
        {selectArray.map((item)=>
        <div key={item.name} className="flex justify-between items-center p-5">
            <div className="">
                <img className='w-20 h-20' src={item.image} alt={item.image} />
                <h1>{item.battingRole}</h1>
            </div>
            <div onClick={()=>handleDelete(item)} className="">
              <FontAwesomeIcon icon={faCircleXmark} size="2x" className="text-red-500" />
            </div>
        </div>
        )}
    </div>
  )
}
