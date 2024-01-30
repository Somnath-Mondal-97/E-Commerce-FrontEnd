// IndividualItem.js
import React, { useContext } from 'react';
import arrow_breadcrumbs from '../Assests/breadcrum_arrow.png';
import './IndividualItem.css';
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const IndividualItem = (props) => {
  const { id, category, name, image, old_price, new_price } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          Home <img src={arrow_breadcrumbs} alt="" className='breadcrumbs_arrow'/> Shop <img src={arrow_breadcrumbs} alt="" className='breadcrumbs_arrow'/> {capitalizeFirstLetter(category)} <img src={arrow_breadcrumbs} alt="" className='breadcrumbs_arrow'/> {name}
        </div>
        <div className="row mt-5 product-display">
            <div className="col-lg-4 product-display-left">
                <div className="product-display-main-image d-flex justify-content-center">
                    <img src={image} alt="" className='img-fluid'/>
                </div>
            </div>
            <div className="col-lg-8 product-display-right">
                <h1>{name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122 Ratings)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="right-price-old">
                        ${old_price}
                    </div>
                    <div className="right-price-new">
                        ${new_price}
                    </div>
                </div>
                <div className="generic-description">
                    <h5>Introducing our comfortable and versatile Casual Cotton T-Shirt, a wardrobe essential for everyday wear. Crafted with care, this classic tee offers a perfect blend of style and comfort.</h5>
                </div>
                <div className="product-display-right-size">
                    <h1>Select Your Size</h1>
                    <div className="product-display-right-size-chart">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='btn btn-success' onClick={()=>{addToCart(id)}}> Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualItem;




