import React from 'react';                     
import logo1 from '../image/img1.png';
import logo2 from'../image/img1.png'; 
import logo3 from '../image/img1.png'; 
import logo4 from '../image/img1.png'; 
import logo5 from '../image/img1.png'; 
import Marquee from "react-fast-marquee";
import Footer from './Footer';
const logos = [logo1, logo2, logo3,logo4,logo5];
const Customer = () => {                         
  return (
    <div className='main'>
      <div className='text-center'>
        <h1 className='text-[54px] text-[#393285] font-a1 leading-[65px]'>Our Customers</h1>
      <Marquee >
        <div className='flex w-[100%] justify-around h-[300px] item-center customer-d'>
        <img className='w-[260px] h-[180px] img2 mt-10 pl-10 pr-10' src={logo1} alt="image1"/>
        <img className='w-[270px] h-[190px] img2 mt-8 pl-10 pr-10' src={logo2} alt="image1"/>
        <img className ="w-[264px] h-[194px] img2 mt-8 pl-10 pr-10"src={logo3} alt="image1"/>
        <img className='w-[354px] h-[246px] img4 pl-10 pr-10 'src={logo4} alt="image1"/>
        <img className='w-[300px] h-[236px] img3 pl-10 pr-10 ' src={logo5} alt="image1"/>
        </div>
      </Marquee>
      </div>
      <div className='bg-[#393285] h-[355px] d-main'>
        <Footer/>
      </div>
    </div>
  );
};

export default Customer;