import React, { useState } from 'react';
import background from '../assets/contactUsBackground.png';

import { TiContacts } from "react-icons/ti";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
    const [details, setDetails] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        const Value = e.target.value;
        const Name = e.target.name;

        setDetails(prev => {
            return { ...prev, [Name]: Value }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(details)
    }

    return (
        <div className='flex justify-between max-w-6xl py-10 px-4 m-auto font-inter bg-white sm:p-12'>
            <form className='flex flex-col gap-5 w-full sm:max-w-96 sm:w-1/2' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='text-5xl font-bold mb-4 text-primary'>Contact Us</h1>
                <div className="relative">
                    <label className='absolute text-3xl my-2 ml-3' htmlFor="name"><LiaIdCardAltSolid className='' /></label>
                    <input
                        className='rounded-3xl border-[1px] border-black p-2.5 pl-12 bg-[#CED7F3] min-w-80 w-full text-lg text-bold placeholder:text-[#8A94EE]'
                        placeholder='Name'
                        name="name"
                        id="name"
                        type="text"
                        value={details.name}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="relative">
                    <label className='absolute text-3xl my-2 ml-3' htmlFor="phone"><TiContacts className='' /></label>
                    <input
                        className='rounded-3xl border-[1px] border-black p-2.5 pl-12 bg-[#CED7F3] min-w-80 w-full text-lg text-bold placeholder:text-[#8A94EE]'
                        placeholder='Phone'
                        name="phone"
                        id="phone"
                        type="tel"
                        value={details.phone}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="relative">
                    <label className='absolute text-3xl my-2 ml-3' htmlFor="email"><HiOutlineMailOpen className='' /></label>
                    <input
                        className='rounded-3xl border-[1px] border-black p-2.5 pl-12 bg-[#CED7F3] min-w-80 w-full text-lg text-bold placeholder:text-[#8A94EE]'
                        placeholder='Email'
                        name="email"
                        id="email"
                        type="email"
                        value={details.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="relative">
                    <label className='absolute text-3xl my-2 ml-3' htmlFor="message"><MdOutlineMessage className='' /></label>
                    <textarea
                        className='resize-none rounded-3xl border-[1px] border-black p-1.5 pl-12 bg-[#CED7F3] min-w-80 w-full text-lg text-bold placeholder:text-[#8A94EE]'
                        placeholder='Message'
                        name="message"
                        id="message"
                        rows="5"
                        value={details.message}
                        onChange={(e) => handleChange(e)}
                        required
                    ></textarea>
                </div>
                <button className='bg-primary py-2 px-8 rounded-full text-white self-start text-lg' type="submit">Submit</button>
            </form>
            <div className="w-1/2 hidden sm:block">
                <img className='w-full h-full' src={background} alt="contacusBackground" />
            </div>
        </div>
    )
}

export default ContactUs;