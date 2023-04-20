import React from 'react'
import LF from './luisFaria.png';
import Garden from './garden.png';
import Marble from './marble.png';
import Gymapp from './gymapp.png';
import Ultraverse from './ultraverse.png';
import Project from './UI/Project';

function Gallery() {
  return (
    <div className="row">
      <h1 className="gallery__title">Our Gallery</h1>
      <div className="gallery">
        <div className="gallery-item" data-aos="fade-down-right" data-aos-delay="100">
          <Project img={LF} link={'https://luisfaria.co.uk/'}/>
        </div>
        <div className="gallery-item" data-aos="fade-down-right" data-aos-delay="250"> 
          <Project img={Ultraverse} link={'https://luis-internship.vercel.app'}/>
        </div>
        <div className="gallery-item" data-aos="fade-down-right" data-aos-delay="250">
          <Project img={Gymapp} link={'https://lpedrosf.github.io/GymApp/'}/>
        </div>
        <div className="gallery-item" data-aos="fade-down-right" data-aos-delay="400">
          <Project img={Garden} link={'https://lpedrosf.github.io/gardening-project/'}/>
        </div>
        <div className="gallery-item" data-aos="fade-down-right" data-aos-delay="400">
          <Project img={Marble} link={'http://joaofaria.co.uk/'}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;