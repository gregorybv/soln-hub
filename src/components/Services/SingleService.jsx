import React, { memo } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import "./Services.css";

export const SingleService = memo(({service}) => {
  return (
    <div className='item bg-dark translate-effect'>
        <span className='item-icon'>
            {service.icon}
        </span>
      <h4 className='item-title fs-25'>{service.title}</h4>
      <p className='fs-19 text'>{service.text}</p>
      <a href="/" className='item-link text-grey'>
        <BsArrowRightCircle size={30}/>
      </a>
    </div>
  )
});
