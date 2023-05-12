import { useState } from 'react';
import logoAud from '../../assets/shared/desktop/logo.svg';
import CartIcon from './CartIcon';
import NavLink from './NavLink';

const Navbar = () => {
  const [stateMenu, setStateMenu ] =  useState(false)
  const handleMenu = () => {
    setStateMenu(!stateMenu)
  }
  return (
    <nav
      className="
      fixed
      w-full 
      bg-black
      lg:bg-transparent 
      z-40 
      py-5 
      px-10
      flex
      items-center
      justify-between 
      md:px-44 
      lg:px-44 
      lg:flex 
      lg:justify-between 
      lg:items-center
      border-b
      border-slate-600
      "
    >
    
      <div className="flex items-center gap-10">
        <span className="cursor-pointer lg:hidden" onClick={handleMenu}>
          {stateMenu === false && (
            <i className="fa-solid fa-bars hover:text-orange-400 duration-300 text-white text-xl"></i>
          )}
          {stateMenu === true && (
            <i className="fa-solid fa-x hover:text-orange-400 duration-300 text-white text-xl"></i>
          )}
        </span>
        <span>
          <img src={logoAud} alt="logo_aud" />
        </span>
      </div>
      {stateMenu === false && (
        <ul
          className="
        lg:z-auto 
        lg:static
        lg:flex 
        lg:gap-10
        lg:w-auto
        lg:mt-0
        z-[-1]
        mt-6
        absolute
        w-full
        top-11
        py-4
        pl-5
        bg-black
        lg:bg-transparent 
        opacity-0
        lg:opacity-100
        "
        >
          <NavLink label="HOME" />
          <NavLink label="HEADPHONES" />
          <NavLink label="SPEAKERS" />
          <NavLink label="EARPHONES" />
        </ul>
      )}
      {stateMenu === true && (
        <ul
          className="
        lg:z-auto 
        lg:static
        lg:flex 
        lg:gap-10
        lg:w-auto
        lg:mt-0
        lg:pl-0
        md:pl-44
        z-[-1]
        mt-2
        absolute
        left-0
        w-full
        top-11
        pl-10
        bg-black
        duration-500
        lg:opacity-100
        "
        >
          <NavLink label="HOME" />
          <NavLink label="HEADPHONES" />
          <NavLink label="SPEAKERS" />
          <NavLink label="EARPHONES" />
        </ul>
      )}
      <CartIcon />
    </nav>
  );
};

export default Navbar;
