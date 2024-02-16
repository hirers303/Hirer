import React from 'react';

const Modal = ({ isOpen, closeModal }) => {

    return (
        <>
            {isOpen &&
                <div className='z-50 w-screen h-screen fixed flex justify-center backdrop-blur-lg shadow-lg top-0 left-0 font-inter' onClick={closeModal} >
                    <div className="my-auto mx-4 bg-white rounded-md p-12 flex items-center flex-col gap-4 animate-popin" onClick={(e) => e.stopPropagation()}>
                        <h1 className='text-4xl font-bold mb-4 text-primary'>What are you looking for?</h1>
                        <a href="#" onClick={closeModal} className="bg-gray text-black font-bold rounded-3xl text-center bg-[#DFDCF7] p-2 w-52">Need Job</a>
                        <a href="#" onClick={closeModal} className="bg-gray text-black font-bold rounded-3xl text-center bg-[#DFDCF7] p-2 w-52">Post Job</a>
                    </div>
                </div >
            }
        </>
    )
}

export default Modal;