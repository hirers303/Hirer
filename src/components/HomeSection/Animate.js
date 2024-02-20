import React, { useEffect, useState } from 'react';

const Animate = () => {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => setToggle(prev => !prev), 3000);
        return () => clearTimeout(timerId);
    }, [toggle]);

    return (
        <>
            {toggle
                ? (<div className="text-2xl font-normal animate-slidein text-center" key={1}>
                    <h2 className='font-bold text-primary text-2xl px-2 sm:px-0 sm:text-5xl'>
                        Find, Apply, and Secure<br />Your Dream Job with Hirers in Just 2 Days!
                    </h2>
                    <p className='hidden sm:block'>Experience the accelerated journey to your dream career with us.</p>
                </div>)

                : (<div className="text-2xl font-normal animate-slidein text-center" key={2}>
                    <h2 className='font-bold text-primary text-2xl px-2 sm:px-0 sm:text-5xl'>
                        Elevate your team with Hirers!<br />Post, find and empower your organization.
                    </h2>
                    <p className='hidden sm:block'>Join the journey with Hirers towards building a stronger, more accomplished team.</p>
                </div>)
            }
        </>
    )
}

export default Animate;