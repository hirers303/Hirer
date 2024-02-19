import React from 'react'
import { MdNavigateNext } from 'react-icons/md';

const SimilarJobs = ({ job }) => {
    // job Object as prop to find similar jobs

    // array of jobs similar to job(prop) from DB
    // it`s array of job objects like job(prop), and each object atleast contain id and title
    const similarjobs = [{
        title: "similar job 1",
        id: 1,
    }, {
        title: "similar job 2",
        id: 2,
    }, {
        title: "similar job 3",
        id: 3,
    }, {
        title: "similar job 4",
        id: 4,
    }, {
        title: "similar job 5",
        id: 5,
    }]

    return (
        <>
            {similarjobs && similarjobs.map(job => (
                <a key={job.id} href="#" className='flex justify-between flex-nowrap items-center text-[#555] hover:underline'>
                    <span className='text-xl font-normal text-nowrap truncate w-full'>{job?.title}</span>
                    <MdNavigateNext />
                </a>
            ))}
        </>
    )
}

export default SimilarJobs;