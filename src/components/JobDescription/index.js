import React from 'react';
import JobDetails from './JobDetails';
import SimilarJobs from './SimilarJobs';

const index = () => {
    // just a dummy Object for Backend Reference
    const job = {
        id: "qwerty",
        title: 'Field Sales Executive',
        companyName: 'Paytm',
        location: 'Sector 50, Noida',
        income: '₹15000 - ₹20000 per month',
        category: "Category",
        description: 'Paytm is aggressively hiring for the job profile of Field Sales Executive at Delhi- NCR in Khanpur, Delhi locality.Kindly go through the FAQs below to get all answers related to the given job.You can expect a minimum salary of 21,000 INR and can go up to 31,000 INR.The salary offered will depend on your skills, experience and performance in the interview.',
        details: {
            Education: "12th pass",
            Gender: "Male Only",
            Experience: "Fresher",
            "Communication Skills": "Little english",
            Address: "Sector -50,Noida",
        }
    }

    return (
        <>
            <div className="bg-primary px-3 py-8 font-inter text-white">
                <div className="flex max-w-7xl m-auto flex-col sm:flex-row">
                    <div className="flex flex-col w-full text-2xl sm:w-3/4 gap-2">
                        <h1 className='text-5xl font-normal mb-4'>{job.title}</h1>
                        <h2 className='font-normal'>{job.companyName}</h2>
                        <h2 className='font-normal'>{job.location}</h2>
                        <h2 className='font-normal'>{job.income}</h2>
                        <span className='font-normal bg-white rounded-md py-1 px-4 self-start text-black'>{job.category}</span>
                    </div>
                    <div className="flex items-center justify-center mt-12 min-w-fit sm:justify-start sm:mt-0 sm:w-1/4">
                        <button className='bg-white rounded-lg py-2 px-6 font-normal text-2xl text-nowrap text-primary'>Apply Now</button>
                    </div>
                </div>
            </div>

            <div className='flex max-w-7xl m-auto flex-wrap p-3 justify-between'>
                <div className="flex flex-col order-1 my-4 gap-3 w-full sm:w-fit">
                    <h1 className='text-4xl font-normal'>Job Details</h1>
                    <div className="flex flex-col gap-2 text-2xl">
                        <JobDetails details={job.details} />
                    </div>
                </div>

                <div className="flex flex-col order-3 my-4 gap-3 w-full sm:w-56 sm:order-1">
                    <h1 className='text-4xl font-normal text-nowrap'>Similar Jobs</h1>
                    <div className="flex flex-col gap-0.5">
                        <SimilarJobs job={job} />
                    </div>
                </div>

                <div className="flex flex-col order-2 my-4 gap-3 w-full sm:w-fit">
                    <h1 className='text-4xl font-normal'>Job Description</h1>
                    <p className='text-xl font-normal text-[#808080]'>{job.description}</p>
                </div>
            </div>
        </>
    )
}

export default index;