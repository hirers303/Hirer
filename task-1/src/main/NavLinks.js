import React from 'react'

const NavLinks = ({ href, title }) => {
    return (
        <h1 href={href} className="block py-2 pl-3 pr-4 text-white text-20px font-500">{title}
        </h1>
    );
};

export default NavLinks;
