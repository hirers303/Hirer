import React from 'react';
import JobsPosted from './JobsPosted';

const index = () => {

    const uerData = {
        name: "Your Name",
        designation: "Designation",
        jobsPosted: 2,
        jobsActive: 2,
    }
    return (
        <div className="p-2 max-w-7xl m-auto sm:px-6">
            <div className='flex flex-wrap flex-col-reverse gap-x-10 gap-y-4 py-6 sm:flex-nowrap sm:flex-row'>
                <div className="flex justify-evenly text-2xl gap-10">
                    <div className="flex flex-col gap-0.5">
                        <div className="bg-[#DFDCF7] font-medium rounded-lg py-2 text-center">{uerData.jobsPosted}</div>
                        <h2 className='font-medium text-xl leading-6'>Jobs Posted</h2>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <div className="bg-[#DFDCF7] font-medium rounded-lg py-2 text-center">{uerData.jobsActive}</div>
                        <h2 className='font-medium text-xl leading-6'>Jobs Active</h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between p-3 rounded-lg bg-[#DFDCF7] text-xl w-full gap-4">
                    <div className="flex flex-col">
                        <h2 className='text-2xl font-semibold text-nowrap'>Manage Job Posting</h2>
                        <div className='flex gap-x-4 flex-wrap'>
                            <span className='font-normal capitalize'>{uerData.name}</span>
                            <span className='font-normal capitalize'>{uerData.designation}</span>
                        </div>
                    </div>
                    <button className="bg-white rounded-lg font-semibold px-4 py-2 self-center text-nowrap mx-auto sm:mx-0">Post New Job</button>
                </div>
            </div>
            <JobsPosted />
        </div>
    )
}

export default index;