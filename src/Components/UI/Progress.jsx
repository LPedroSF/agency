import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Progress = ({ icon, header, text}) => {
  return (
    <div className="process__container div__hover-effect">
      <FontAwesomeIcon className='process__container--icon' icon={icon} />
      <h3 className='process__container--header'>{header}</h3>
      <p className='process__container--para'>{text}</p>
    </div>
  )
};

export default Progress;