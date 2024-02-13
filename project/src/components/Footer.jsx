import React from 'react'
import image4 from '../image/img1.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className='h-[100px] flex justify-between pt-3 items-center'>
        <div className='flex items-center'>
      <img className='w-[68px] h-[73px] pl-3 img-1' src = {image4} alt ="image4"/>
      <h1 className='font-a1 text-[48px] leading-[58px] text-[#FFFFFF] pl-3 italic t1'>HIRERS</h1>
      </div>
        <h1 className='font-a1 text-[28px] leading-[33px] text-[#FFFFFF] pr-3 t2'>"Job means Hirers"</h1>
      </div>
      <div className='h-[1px] bg-[#FFFFFF] mt-4'></div>
      <div className='flex  mt-5 d1'>
        <div className='w-[50%] flex flex-row justify-evenly d2'>
      <div className='w-[250px] flex flex-col pl-3 d8'>
        <h1 className='text-[15px] text-[#FFFFFF] leading-[48px]'>Email-:</h1>
        <Link className='font-a2 text-[#FFFFFF] italic text=[15px] underline leading-[30px]'>tanishqkumar64@gmail.com</Link>
        <Link className='font-a2 text-[#FFFFFF] italic text=[15px] underline leading-[30px]'>ashutoashy@gmail.com</Link>
       <Link className='font-a2 text-[#FFFFFF] italic text=[15px] underline leading-[30px]'>amdurkarsanket733@gmail.com</Link>
      </div>
      <div className='w-[120px] flex flex-col mt-2'>
      <h1 className='text-[#FFFFFF]'>Mobile-:</h1>
      <p className='font-a1 text-[#FFFFFF] italic leading-[30px]' >
      +91 7424947309
      +91 9306238429
      +91 9545653199
      </p>
      </div>
      </div>
      <div className='w-[50%] flex flex-row justify-evenly d3'>
      <div className='w-[150px] flex flex-col mt-2 d7 leading-[30px]'>
        <h1 className='font-a1 text-[#FFFFFF]'>Follow Us-:</h1>
        <Link className='font-a1 text-[#FFFFFF] underline'>Facebook</Link>
        <Link className='font-a1 text-[#FFFFFF] underline'>Instagram</Link>
        <Link className='font-a1 text-[#FFFFFF] underline'>Linkedin</Link>
      </div>
      <div className='w-[280px]  mt-2 d9 leading-[30px]'>
        <h1 className='font-a1 text-[#FFFFFF] text-[15px]'>Address-:</h1>
        <p className='font-a1 text-[#FFFFFF] text-[15px]'>
          DTU(formerly known as DCE),New Delhi 110042
        </p>
        <p className='font-a1 text-[#FFFFFF]'>Ask Us Anything</p>
        <Link className='font-a1 text-[#FFFFFF] underline'>Contact Us</Link> 
      </div>
      </div>
      </div>
       
      <h1 className='text-right pr-4 font-a1 italic text-[#FFFFFF] t3'>© 2023 by Hirers.co.in. All Rights Reserved.</h1>
  
    </div>
  )
}

export default Footer
