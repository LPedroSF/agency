import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = ({icon, text}) => {
  return (
    <div className="services__container div__hover-effect">
      <FontAwesomeIcon className='services__container--icon' icon={icon} />
      <p className='services__container--text'>{text}</p>
    </div>
  )
};

export default Services;