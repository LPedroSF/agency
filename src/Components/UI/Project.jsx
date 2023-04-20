import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Project = ({ img, name, link}) => {
  return (
    <a href={link}>
      <figure className='project'>
        <img className='project__img' src={img} />
        <h1>{name}</h1>
      </figure>
    </a>
  )
};

export default Project;