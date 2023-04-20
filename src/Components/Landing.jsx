import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

AOS.init();

function Landing() {
  return (
    <section id='landing'>
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" className="landing__bg" >LPSF</div>
        <div className="landing" data-aos-delay="500" data-aos-duration="300" data-aos="zoom-in">
          <h1 className='landing__header'>Proffessional Web Designers.</h1>
          <Link to="/about" className="landing__button">Contact Us!</Link>
      </div>
    </section>
  )
};

export default Landing;