import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data_product from '../Assests/new_collections';
import Item from '../Item/Item';

function Slider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselSettings = {
    responsive: responsive,
    autoPlay: true,
    autoPlaySpeed: 2000,
    infinite: true,
    showDots: false, // Hide the dots
    arrows: false, // Hide the navigation arrows
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-lg-10 m-auto">
          <Carousel {...carouselSettings}>
            {data_product.map((item, i) => (
              <div key={i}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            ))}
          </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
