import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import Modal from './components/Modal';
import ContactUs from './components/ContactUs';
import JobDescription from './components/JobDescription';
import HomeSection from './components/HomeSection';
import UserProfile from './components/UserProfile';

const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* <>
                <button className="bg-gray text-black font-bold rounded-3xl text-center bg-[#DFDCF7] p-2 w-52" onClick={() => setOpen(true)}>open</button>
                <Modal
                    isOpen={open}
                    closeModal={() => setOpen(false)}
                />
            </> */}
            <HomeSection />
            {/* <AboutUs /> */}
            {/* <ContactUs /> */}
            {/* <JobDescription /> */}
            {/* <UserProfile /> */}
        </>
    )
}

export default App;