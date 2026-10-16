import React from 'react'

function Card({data}) {
  return (
    <div className="">
     <div className=" w-70 rounded-xl bg-zinc-700 p-2 flex flex-col items-center">
    <img className='h-65 w-65 rounded-[50%] items-center content-center' src={data.img} alt={data.name} title={data.name}/>
     <h2 >{data.name}</h2>
     <p >I am {data.name} from {data.city} and you can call me {data.nickname}  </p>
     </div>   
    </div>
  )
}

export default Card