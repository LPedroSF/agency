import React from 'react';
import Service from './UI/Service';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

function Services() {
  return (
    <section id='services'>
      <h1 className='header'>What we can do for you!</h1>
      <div className="contianer">
        <div className="row">
          <div className="service">
            <h3 className='services__header'>Services</h3>
            <p className='services__subheader'>No matter if you want an e-commerce website or a personal website, 
              we've got you covered with the most interactive, beautiful designs all to your liking!
            </p>
            <div className="services">
              <div data-aos="fade-right" data-aos-delay="200">
                <Service icon="fa-coins" text="E-commerce" />
              </div>
              <div data-aos="fade-right" data-aos-delay="250">
                <Service icon="fa-briefcase" text="Business" />
              </div>
              <div data-aos="fade-right" data-aos-delay="300">
                <Service icon="fa-blog" text="Personal Blog" />
              </div>
              <div data-aos="fade-right" data-aos-delay="350">
                <Service icon="fa-file" text="E-Portfolio" />
              </div>
              <div data-aos="fade-right" data-aos-delay="400">
                <Service icon="fa-plus" text="Many more" />
              </div>             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;