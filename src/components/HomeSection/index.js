import React from 'react';
import background from '../../assets/homeBackground.png';
import whatsappLogo from '../../assets/whatsappLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';
import instagramLogo from '../../assets/instagramLogo.png';
import facebookLogo from '../../assets/facebookLogo.png';
import employer from '../../assets/employer.png';
import jobseekers from '../../assets/jobseekers.png';
import arrowACW from '../../assets/arrowACW.png';
import arrowCW from '../../assets/arrowCW.png';
import Animate from './Animate';

const index = () => {
    return (
        <div className='w-full py-8 px-2 font-inter bg-no-repeat bg-cover h-fit bg-center overflow-hidden relative sm:py-12' style={{ backgroundImage: `url(${background})` }}>
            <div className="flex max-w-7xl flex-col m-auto">
                <Animate />
                <div className="relative flex flex-row justify-center gap-4 h-full mt-4 z-10 md:absolute md:flex-col md:top-0 md:right-8 md:m-0">
                    <a href="https://chat.whatsapp.com/JBQaLOOjN7yJumj4i061AE" target='_blank' rel='noreferrer'>
                        <img src={whatsappLogo} className='h-10 aspect-square rounded-lg bg-white' alt='whatsapp' />
                    </a>
                    <a href="https://www.linkedin.com/company/hirers-co-in/?" target='_blank' rel='noreferrer'>
                        <img src={linkedinLogo} className='h-10 aspect-square rounded-lg bg-white' alt='linkedin' />
                    </a>
                    <a href="https://www.instagram.com/hirers.co.in/" target='_blank' rel='noreferrer'>
                        <img src={instagramLogo} className='h-10 aspect-square rounded-lg bg-white' alt='instagram' />
                    </a>
                    <a href="https://www.facebook.com/hirers.co.in/" target='_blank' rel='noreferrer'>
                        <img src={facebookLogo} className='h-10 aspect-square rounded-lg bg-white' alt='facebook' />
                    </a>
                </div>
                <div className="flex flex-col gap-20 mt-20 mb-8 justify-evenly mx-2 sm:gap-0 sm:flex-row">
                    <div className="flex flex-col gap-5 items-center">
                        <div className="w-72 relative rounded-lg bg-primary bg-opacity-15 px-3 text-end">
                            <img src={employer} alt="employer" className='h-72 float-start ml-[-40%] mr-[-22%] mt-[-20%]' />
                            <h4 className='text-2xl text-primary my-2 text-nowrap font-bold'>For Employers</h4>
                            <p className='font-semibold'>Hire from a large pool of filtered candidates!!</p>
                            <img src={arrowCW} alt="arrowCW" className='absolute bottom-4 right-8 w-20 rotate-[245deg]' />
                        </div>
                        <a href="/" className='rounded-2xl bg-primary text-white p-1 w-48 text-center text-2xl'>Post Job</a>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <div className="w-72 relative rounded-lg bg-primary bg-opacity-15 px-3 text-start">
                            <img src={jobseekers} alt="jobseekers" className='h-72 float-end ml-[-10%] mr-[-40%] mt-[-20%]' />
                            <h4 className='text-2xl text-primary my-2 text-nowrap font-bold'>For JobSeekers</h4>
                            <p className='font-semibold'>Get 100% verified Jobs at no cost!!</p>
                            <img src={arrowACW} alt="arrowACW" className='absolute bottom-4 left-8 w-20 rotate-[135deg]' />
                        </div>
                        <a href="/" className='rounded-2xl bg-primary text-white p-1 w-48 text-center text-2xl'>Search Job</a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default index;