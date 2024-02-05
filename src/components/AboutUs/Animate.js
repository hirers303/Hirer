import React, { useEffect, useState } from 'react';

const Animate = () => {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => setToggle(prev => !prev), 8000);
        return () => clearTimeout(timerId);
    }, [toggle]);

    return (
        <>
            {toggle
                ? (<div className="text-2xl animate-slidein [text-shadow:_0_0_2px_rgba(0_0_0_/_25)] my-0 sm:my-8" key={1}>
                    <h2 className='font-medium text-3xl'>#Our Mission</h2>
                    <p>"To revolutionize the job search and recruitment process in India by connecting job seekers with employers, fostering inclusive growth, and contributing to sustainable development."</p>
                </div>)

                : (<div className="text-2xl animate-slidein [text-shadow:_0_0_2px_rgba(0_0_0_/_25)] my-0 sm:my-8" key={2}>
                    <h2 className='font-medium text-3xl'>#Our Vision</h2>
                    <p>"To create a future where every individual, regardless of background, has access to meaningful employment and to be a catalyst for positive change and development in India."</p>
                </div>)
            }
        </>
    )
}

export default Animate;