import React from 'react'

const IconRedSocial = ({redSocial, link}) => {
  return (
    <div>
      <a href={link} target="_blank">
        <i className={`text-white text-2xl ${redSocial}`}></i>
      </a>
    </div>
  );
}

export default IconRedSocial
