import React from 'react';
import logoAud from '../../assets/shared/desktop/logo.svg';
import NavLink from '../Nav/NavLink';
import { dataFooter } from '../../api/footerData';
import IconRedSocial from '../IconRedSocial';

const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-center md:items-start md:pl-10 items-center lg:px-44 lg:mt-20 ">
      <div className="border border-orange-400 h-1 bg-orange-400 w-28"></div>
      <div className="pt-10 flex flex-col items-center md:items-start lg:flex-row lg:justify-between lg:w-full ">
        <img src={logoAud} alt="logo-aud" />
        <ul className='lg:flex gap-5'>
          <NavLink label="HOME" />
          <NavLink label="HEADPHONES" />
          <NavLink label="SPEAKERS" />
          <NavLink label="EARPHONES" />
        </ul>
      </div>
      <p className="text-gray-500 px-10 text-center md:text-start md:px-0 font-semibold lg:pr-[1000px]">
        {dataFooter.footer.information}
      </p>
      <div className='mt-10 flex flex-col items-center md:flex md:items-center md:flex-row md:justify-between md:px-5 lg:px-0 md:w-full'>
        <span className="text-gray-500 px-10 text-center  md:px-0 font-semibold">
          {dataFooter.footer.copyright}
        </span>
        <ul className="flex gap-5 mt-10 md:mt-0">
          {dataFooter.socials.map((red) => {
            return <IconRedSocial key={red.label} redSocial={red.icon} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
