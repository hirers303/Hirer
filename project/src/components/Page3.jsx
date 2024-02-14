import React from 'react'
import image1 from "../image/arrow.png"
import image2 from "../image/filter.png"
import image3 from "../image/dropdown.png"
import Card from './Card'
const Page3 = () => {
  return (
    <div>
        <div className='relative text-center bg-[#393285]'>
            <h1 className='text-4xl text-[#FFFFFF] font-abc'>GET HIRED IN 3 EASY STEPS</h1>
            <div className='relative flex  mt-5' >
                <div className='w-[480px] h-[73px] flex relative'>
            <h1 className='w-[200px] text-[36px] text-[#FFFFFF] font-abc font-normal'>1)Select Job</h1>
            <div className='w-[333px] h-[147px] rotate-12 relative'>
            <img src={image1} alt ="image1"/>
            </div>
            </div>
            <div>
            <h1 className='text-3xl text-[#FFFFFF] font-abc font-normal'>2)Apply by filling basic details</h1>
            </div>
            <div>
            <img className="w-[20%] h-20"src={image1} alt ="image1"/>
            </div>
            <div>
            <h1 className='text-3xl text-[#FFFFFF] font-abc font-normal'>3)Give interview and get hired easily</h1>
            </div>
            </div>
        </div>
       <div className='relative flex'>
        <div className='relative w-[80%] flex justify-around mt-5'>
        <button className=' flex bg-[#D9D9D9] w-[67px] h-[66px] items-center justify-center rounded-[20px]'><img className='w-[45px] h-[41px]' src={image2} alt="image2"/></button>
        <button className=' bg-[#D9D9D9] text-center w-[252px] h-[65px] rounded-[20px] text-[#393285] font-abc text-[32px]'>All categories</button>
        <button className='flex flex-row bg-[#D9D9D9] text-center items-center justify-center w-[210px] h-[66px] rounded-2xl text-[#393285] font-abc text-[32px] rounded-[20px]'>Location <img className='w-[45px] h-[45px]' src={image3} alt="image3"/></button>
        <button className='flex flex-row bg-[#D9D9D9] w-[232px] h-[66px] items-center justify-center rounded-2xl text-[#393285] font-abc text-[32px] rounded-[20px]'>Education <img className='w-[45px] h-[45px]' src={image3} alt="image3"/></button>
        <button className='flex flex-row bg-[#D9D9D9] w-[182px] h-[65px] items-center justify-center rounded-2xl text-[#393285] font-abc text-[32px] rounded-[20px]'>Salary <img className='w-[45px] h-[45px]' src={image3} alt="image3"/></button>
       </div>
       </div>
       <div className='mt-8 flex ml-7 mr-7 justify-between'>
        <Card/>
         <Card/>
        <Card/>  
      
       </div>
        <div className='mt-8 flex ml-7 mr-7 justify-between'>
        <Card/>
        <Card/>
        <Card/>
      
       </div> 
    </div>
  )
}

export default Page3
