import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Hero.css'

function Hero() {
  return (
    <div>
      <section id='home'>
        <div className="container-fluid px-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1>Kolkata Garments</h1>
                <h3>One Stop Solution for all Your Garments Need</h3>
                <div className='mt-4'>
                  <button className='shop-now btn btn-danger'>
                    Shop Now
                    <FontAwesomeIcon icon={faShoppingBag} className='ps-3'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;



