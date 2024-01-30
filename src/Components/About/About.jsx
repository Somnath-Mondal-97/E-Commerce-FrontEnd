import React from 'react';
import boyGirl from '../Assests/boyGirl.jpeg';
import './About.css';

function About() {
  return (
    <div>
      <section className="about">
        <div className="about-section wrapper">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img src={boyGirl} alt="" style={{ borderLeft: '0' }} />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 text-sec">
                <h3>We Pride Ourselves on Delivering A1 Quality Garments on Your DoorStep</h3>
                <h5>Discover a world of endless possibilities with our curated collection of premium products. From stylish fashion to cutting-edge electronics, we have everything you need to elevate your lifestyle. Browse through our categories and find the perfect items to suit your taste.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
