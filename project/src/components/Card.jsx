import React from 'react'
import image1  from '../image/paytm.png'
import image2  from '../image/drop.png'
import image3  from '../image/location.png'
import image4  from '../image/salary.png'
const Card = () => {
  return (
    <div className='w-[402px] h-[307px] bg-[#DFDCF7] rounded-[15px]'>
      <div className='flex ml-5  pt-2 pb-2'>
        <img className='w-[89px] h-[89px] pr-4' src ={image1} alt="img"/>
        <div className='flex flex-col justify-center'>
            <div className='flex'>
            <h1 className='text-[#000000] font-abc text-[20px] font-normal leading-7'>Field sales executive </h1>
            <img className='w-[30px] h-[25px] pl-1 mt-1.5' src={image2}alt="img2"/>
            </div>
            <h1 className='text-[#393285] font-abc text-[20px] font-normal leading-7'>Paytm</h1>
            </div>
        </div>
        <div className='flex ml-10 pt-2 pb-2  items-center'>
         <img className='pr-4 w-[46px] h-[49px]'src={image3} alt="img3"/>
          <h1 className='text-[#000000] font-abc text-[20px] font-normal leading-7'>Sector 50,Noida</h1>
        </div>
        <div className='flex ml-10 pt-2 pb-2  items-center'>
         <img  className=' w-[48px] h-[48px] pr-4'src={image4} alt="img4"/>
          <h1 className='text-[#000000] font-abc text-[20px] font-normal leading-7'>₹15000-₹20000</h1>
        </div>
        <button className=' ml-9 bg-[#FFFFFF] text-center w-[154px] h-[47px]  rounded-2xl text-[#000000] font-abc text-[20px] font-normal leading-7'>Category</button>
    </div>
  )
}

export default Card
