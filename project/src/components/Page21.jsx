import React from 'react'
import image from '../asets/image/img9.png'
const Page21 = (props) => {
    const {name,companyname,address}=props
  return (
    <div  className='flex w-[30%] h-[300px] top-40'>
     <img className='w-[10%] h-[70%]  z-10  absolute top-15' src={image} alt = "image9"/>
     <div className='bg-[#DFDCF7] w-[70%] h-[130px] relative rounded-2xl top-20 left-12 flex  flex-col items-center justify-center text-center'>
  <p className="ml-20 font-Inter text-color-[#000000]  font-bold">{name}</p>
  <p className="ml-20 font-Inter text-color-[#000000]  font-bold">{companyname}</p>
  <p className="ml-20 font-Inter text-color-[#000000]  font-bold">{address}</p>
</div>

    </div>
  )
}

export default Page21
