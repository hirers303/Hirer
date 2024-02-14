
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import logo from './Images/Logo.png';


const navLinks = [
    {
        title: "Post Job",
        path: "#about",
    },
    {
        title : "Need Job",
        path : "#projects"
    },
    {
        title : "Contact Us",
        path : "#contact"
    }
]

const NavBar = () => {

    const [navbarOpen , setnavbarOpen] = useState(false);

  return (
    <nav className='top-0 left-0 right-0 z-10 bg-[#393285] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
      <a href="/" className="navbar-brand">
    <img src={logo} width={`85`} alt="Logo" />     </a>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ?( <button onClick={() => setnavbarOpen(true)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5' />
                        </button>) 
                        :( <button onClick={() => setnavbarOpen(false)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5' />
                        </button>) 
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navBar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLinks href={link.path} title={link.title}/>
                            </li>
                        ))}
                                    <button className="btn-Nav">Login / SignUp</button>  
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
  )
}

export default NavBar

// import React from 'react';
// import logo from './Images/Logo.png';

// const Navbar = () => {
//   return (
//     <nav className="navbar-1">
//       <div className="container">
//         <a href="/" className="navbar-brand">
//           <img src={logo} width={`85`} alt="Logo" />
//         </a>
//         <div className="collapse-nav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="/" className="nav-link">Post Job</a>
//             </li>
//             <li className="nav-item">
//               <a href="/register" className="nav-link">Need Job</a>
//             </li>
//             <li className="nav-item">
//               <a href="/login" className="nav-link">Contact Us</a>
//             </li>
//             <button className="btn-Nav">Login / SignUp</button>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
