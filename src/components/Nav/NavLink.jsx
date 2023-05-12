import React from 'react'

const NavLink = ({label}) => {
  return (
    <>
      <li className="
      my-4
      text-white 
      cursor-pointer 
      hover:text-orange-400 
      transition 
      duration-300">
        {label}
      </li>
    </>
  );
}

export default NavLink
