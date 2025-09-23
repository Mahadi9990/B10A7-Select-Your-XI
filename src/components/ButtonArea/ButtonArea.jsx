import React from "react";

export default function ButtonArea({troggle,settroggle}) {
  return (
    <div className="mx-auto max-w-[1200px] flex justify-between items-center gap-4 my-5">

      {!troggle?
        <div className="available_section">
          <h1 className="text-xl font-bold">Available Players</h1>
        </div>
      :
        <div className="selected_section">
          <h1 className="text-xl font-bold">Selected Player (4/6)</h1>
        </div>
      }
      <div className="button_area flex justify-center items-end flex-row gap-4">
        <button className={`btn ${!troggle ? 'bg-[#E7FE29]':"bg-white"}`} onClick={()=>settroggle(false)}>Available</button>
        <button className={`btn ${!troggle ? 'bg-white':"bg-[#E7FE29]"}`} onClick={()=>settroggle(true)}>
          Selected (<span>0</span>)
        </button>
      </div>
    </div>
  );
}
