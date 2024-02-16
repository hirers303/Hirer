import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import Modal from './components/Modal';
import ContactUs from './components/ContactUs';

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
        </>
    )
}

export default App;