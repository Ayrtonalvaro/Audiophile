import { useEffect, useState } from 'react';
import logoAud from '../../assets/shared/desktop/logo.svg';
import CartIcon from './CartIcon';
import NavLink from './NavLink';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Navbar = () => {
  const [stateMenu, setStateMenu ] =  useState(false)
  const [scroll, setScroll] = useState(false)
  
  const handleMenu = () => {
    setStateMenu(!stateMenu)
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  },[])

  const navTrasnparent = `navbar ${scroll ? '-bg-transparent' : '-bg-transparent'}`
  return (
    <div>
      <nav
        className={`
      fixed
      w-full 
      bg-black
      lg:${navTrasnparent}
      duration-200
      top-0
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
      `}
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
            <Link to="/">
              <NavLink label="HOME" />
            </Link>
            <Link to="/products/headphones">
              <NavLink label="HEADPHONES" />
            </Link>
            <Link to="/products/speakers">
              <NavLink label="SPEAKERS" />
            </Link>
            <Link to="/products/earphones">
              <NavLink label="EARPHONES" />
            </Link>
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
      <div></div>
    </div>
  );
};

export default Navbar;
