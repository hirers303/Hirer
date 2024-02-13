import React from 'react'
import { Link } from 'react-router-dom'
import Page21 from './Page21'
const Page2 = () => {
  return (
    <div className='w-[100%] relative top-20'>
        <div className=' flex-row w-[100%] relative flex justify-center flex gap-80'>
        <div className=' relative w-[22%] mt-10 !important'>
       <div >
        <h1 className='text-5xl text-color-[#393285] font-Inter'>Get Your Job In 48 Hours!!</h1>
        <p className='text-color-[#000000] font-Inter font-bold'>Log in now and get yourjob with Hirers.</p>
       </div>
       <div className='mt-12 '>
        <p className='font-bold'>Looking for hiring?</p>
        <Link className="text-color-[#393285] font-bold"to ="/">Click here</Link>
       </div>
       </div>
       <div className='w-[35%] h-[270px] bg-[#DFDCF7] rounded-3xl pl-9 '>
        <div>
            <h4 className='font-Inter text-color-[#000000] text-3xl mt-2 mb-2 font-bold'>Candidate LogIn/SignUp</h4>
            <div className='flex flex-row w-[100%] gap-5'>
            <input className=' w-[18%] h-9 rounded-xl  font-Inter bg-[#FFFFFF] text-color-[#000000] text-center font-800 mt-2 mb-2 placeholder-[#000000]' type = "text" placeholder='+91'/>
            <input className=' w-[72%] h-9 rounded-xl font-Inter bg-[#FFFFFF] text-color-[#000000] mt-2 mb-2' type = "text" placeholder='Mobile number'/>
            </div>
        </div>
        <Link className='inline-block w-[90%]' to="/about"><div className='w-[105%] h-9 rounded-xl bg-[#393285]  font-Inter text-[20px] text-color-[#FFFFFF] text-center mt-2 mb-4 '>LogIn</div></Link>
      
        <div>
        <p className='font-Inter text-color-[#000000] text-2xl'>Click here to login using Google/FB account</p>

             <div className='flex flex-row'>
             <i className="bi bi-facebook"></i>
             <i className="bi bi-google"></i>
             </div>
             </div>
        </div>
        </div>
        <h1 className='mt-20 text-3xl text-center text-#393285'>Our Selected candidates</h1>
        <div className='w-[100%] h-[300px] relative top-31 flex text-center justify-center '>
            <Page21 name ="Divyakant Guatam"companyname="Curefoods" address="Noida sec64"/>
            <Page21 name ="Divyakant Guatam"companyname="Curefoods" address="Noida sec64"/>
            <Page21 name ="Divyakant Guatam"companyname="Curefoods" address="Noida sec64"/>
        </div>
    </div>
  )
}

export default Page2
