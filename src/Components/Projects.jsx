import React from 'react';
import Project from './UI/Project';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import LF from './luisFaria.png';
import Gymapp from './gymapp.png';
import Ultraverse from './ultraverse.png';

AOS.init();

function Projects() {
  return (
    <section id="projects">
      <h1 className='header'>Browse through our work!</h1>
      <div className="container">
        <div className="row">
          <div className="projects">   
            <div className="projects__wrapper">
              <div className="projects__wrapper--container"
                data-aos="fade-right"
              >
                <Project img={LF} name="Luis Faria" link={'https://luisfaria.co.uk/'}/>
              </div>
              <div className="projects__wrapper--container"
                  data-aos="fade-right" data-aos-delay="100"
              >
                <Project img={Ultraverse} name="Ultraverse" link={'https://luis-internship.vercel.app'}/>
              </div>
              <div className="projects__wrapper--container"
                data-aos="fade-right" data-aos-delay="200"
              >
                <Project img={Gymapp} name="Gymapp" link={'https://lpedrosf.github.io/GymApp/'}/>
              </div>
            </div>
            <Link to="/projects" className="projects__btn click">Browse more!</Link>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;