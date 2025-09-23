import React from 'react'
import Card from '../Card/Card'

export default function AllCard({all}) {
  return (
    <div className="">
        <div className=""></div>
      <div className="max-w-[1200px] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {all && all.length > 0
          ? all.map((item) => <Card key={item.name} singleCard={item} />)
          : null}
      </div>
    </div>
  )
}
