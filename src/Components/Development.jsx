import React from 'react';
import Progress from './UI/Progress';

function Development() {
  return (
    <div className="container">
        <div className="row">
          <h3 className='process__header'>What will happen once you contact us?</h3>
          <div className="process">
            <div className='process__wrapper' data-aos="fade-right" data-aos-delay="100">
              <Progress
                icon="fa-solid fa-phone" 
                header="The Talk" 
                text="Once you contact us, we will get back to you to discuss your needs." 
              />
            </div>
            <div className='process__wrapper' data-aos="fade-right" data-aos-delay="150">
              <Progress 
                icon="fa-solid fa-gear"
                header="The Work" 
                text="Where the magic happens. We will get your website half way done." 
              />
            </div>
            <div className='process__wrapper' data-aos="fade-right" data-aos-delay="200">
              <Progress 
                icon="fa-magnifying-glass"
                header="Quality Check" 
                text="We only finish when your happy with your website!" 
              />
            </div>
            <div className='process__wrapper' data-aos="fade-right" data-aos-delay="250">
              <Progress 
                icon="fa-solid fa-box"
                header="Enjoy!" 
                text="Your website is now live and ready to use!" 
              />
            </div>
          </div>
        </div>
      </div>
  )
};

export default Development;