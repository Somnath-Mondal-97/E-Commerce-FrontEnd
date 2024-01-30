import React from 'react'
import './Counter.css'

function Counter() {
  return (
    <div>
      <section id='counter'>
        <section className="counter-section">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-4 mb-lg-0 mb-md-0 mb-5 mt-3">
                        <h2>
                            <span id='count1'>30</span>+
                        </h2>
                        <p>Products</p>
                    </div>
                    <div className="col-md-4 mb-lg-0 mb-md-0 mb-5 mt-3">
                        <h2>
                            <span id='count2'>6700</span>+
                        </h2>
                        <p>Happy Customer</p>
                    </div>
                    <div className="col-md-4 mb-lg-0 mb-md-0 mb-5 mt-3">
                        <h2>
                            <span id='count3'>36</span>+
                        </h2>
                        <p>Delivery Location</p>
                    </div>
                </div>
            </div>
        </section>
      </section>
    </div>
  )
}

export default Counter
