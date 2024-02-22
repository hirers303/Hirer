import React from 'react'

const JobsPosted = ({ user }) => {
    // user Object as prop to find jobs posted

    const jobsPosted = [{
        title: "BPO CUSTOMER CARE",
        posted_on: "12-02-2024",
        exire_on: "27-02-2024",
        status: "active",
        id: 1,
    }, {
        title: "BPO CUSTOMER CARE",
        posted_on: "12-02-2024",
        exire_on: "27-02-2024",
        status: "inactive",
        id: 2,
    }];

    return (
        <div className='py-6'>
            <div className="flex flex-row gap-2 mb-4">
                <label htmlFor="sort" className="font-medium text-2xl">Sort by:</label>
                <select id="sort" defaultValue="posteddate" className="bg-[#DFDCF7] rounded-xl py-1 px-3 text-xl">
                    <option value="posteddate">Posted Date</option>
                </select>
            </div>
            <div className="flex flex-col gap-3">
                {jobsPosted && jobsPosted.map(job => (

                    <div key={job.id} className="bg-[#DFDCF7] rounded-lg p-4">
                        <span className='text-primary text-2xl font-semibold'>{job.title}</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-0.5 justify-between items-end w-full text-lg">
                            <div className="font-normal">Posted on: <span>{job.posted_on}</span></div>
                            <div className="font-normal">Expire on: <span>{job.exire_on}</span></div>
                            <div className="font-normal">Job Status: <span className='capitalize'>{job.status}</span></div>

                            <div className="flex flex-col items-center">
                                <label htmlFor='status' className="font-normal">Status: </label>
                                <select id="status" defaultValue={job.status} className="bg-white rounded-full p-0.5">
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <button className="bg-white rounded-xl py-1 px-3 text-xl">Check Responses</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default JobsPosted;