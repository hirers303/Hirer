import React from 'react';
import background from "../../assets/aboutUsBackground.jpg";
import Animate from './Animate';

const index = () => {
    return (
        <div className={`w-full bg-[#6c67a5cd] py-12 px-2 font-inter text-white relative text-center [text-shadow:_0_4px_4px_rgba(0_0_0_/_0.25)]`} >
            <img src={background} alt="background" className='absolute z-[-1] top-0 left-0 w-full h-full object-contain' />
            <div className="flex max-w-7xl flex-col m-auto">
                <h1 className='font-semibold mb-4 text-4xl [text-shadow:_0_0_2px_rgba(0_0_0_/_100)] hidden sm:block'>
                    About Us<br />Empowering Careers, Connecting Futures!!
                </h1>
                <p className='text-2xl hidden sm:block'>
                    Welcome to Hirers, a dynamic platform committed to reshaping the employment landscape in India. At Hirers, we believe in the transformative power of meaningful employment, where careers are not just jobs but paths to personal and professional fulfillment.
                </p>
                <Animate />
                <p className='text-2xl hidden sm:block'>
                    Hirers is more than a job portal; it's a movement dedicated to building careers, fostering sustainability, and contributing to the evolution of a prosperous India. Whether you're a job seeker ready to embark on a new journey or an employer seeking exceptional talent, Hirers is your gateway to opportunities that matter.
                </p>
            </div>
        </div>
    )
}

export default index;