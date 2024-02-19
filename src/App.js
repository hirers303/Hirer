import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import Modal from './components/Modal';
import ContactUs from './components/ContactUs';
import JobDescription from './components/JobDescription';

const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AboutUs />
            <ContactUs />
            <Modal
                isOpen={open}
                closeModal={() => setOpen(false)}
            />
            <JobDescription />
        </>
    )
}

export default App;