import React from 'react'
import NavLinks from './NavLinks'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col items-center py-4'>{links.map((link , index ) => (
    <li key={index}>
    <NavLinks href={link.path} title={link.title}/>
    </li>
    ))}
                    <button className="btn-Nav">Login / SignUp</button>
                    </ul>
  )
}

export default MenuOverlay