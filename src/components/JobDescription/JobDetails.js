import React from 'react'

const JobDetails = ({ details }) => {

    return (
        <>
            {details && Array.from({ length: Math.ceil(Object.entries(details).length / 2) }).map((_, index) => (
                <div className="flex flex-wrap gap-x-12 gap-y-2" key={Object.keys(details)[index * 2]}>
                    <div className="font-normal text-nowrap">
                        <h4 className='text-xl text-[#808080] text-nowrap'>{Object.keys(details)[index * 2]}</h4>
                        <h3>{Object.values(details)[index * 2]}</h3>
                    </div>
                    {Object.keys(details)[(index * 2) + 1] &&
                        <div className="font-normal text-nowrap">
                            <h4 className='text-xl text-[#808080] text-nowrap'>{Object.keys(details)[(index * 2) + 1]}</h4>
                            <h3>{Object.values(details)[(index * 2) + 1]}</h3>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}

export default JobDetails;