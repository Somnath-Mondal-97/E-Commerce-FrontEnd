import React, { useContext,useState } from 'react';
import './CartPage.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';

function CartPage() {
  const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const { applyPromoCode, settingMessage } = useContext(ShopContext);
  const [promoCodeInput, setPromoCodeInput] = useState('');

  const handlePromoCodeChange = (e) => {
    setPromoCodeInput(e.target.value);
  };

  const handleTryCode = () => {
    applyPromoCode(promoCodeInput);
    settingMessage()
  };

  let itemNumber = 1;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-lg-8">
        <div className="row text-center cart-heading">
          <div className="col-lg-1 cart-sub-heading">#</div>
          <div className="col-lg-2 cart-sub-heading">Icon</div>
          <div className="col-lg-3 cart-sub-heading">Title</div>
          <div className="col-lg-2 cart-sub-heading">Quantity</div>
          <div className="col-lg-2 cart-sub-heading">Price</div>
          <div className="col-lg-2 cart-sub-heading">Remove</div>
        </div>
        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            const itemIndex = itemNumber++;
            return (
              <div key={e.id}>
                <div className="row text-center cart-items mt-3">
                  <div className="col-lg-1 cart-sub-items">{itemIndex}</div>
                  <div className="col-lg-2 cart-sub-items">
                    <img src={e.image} alt="" className='cart-product-icon d-flex mx-auto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  </div>
                  <div className="col-lg-3 cart-sub-items">{e.name}</div>
                  <div className="col-lg-2 cart-sub-items">
                    <button className='btn btn-success cart-quantity-button'>{cartItem[e.id]}</button>
                  </div>
                  <div className="col-lg-2 cart-sub-items">${e.new_price * cartItem[e.id]}</div>
                  <div className="col-lg-2 cart-sub-items">
                    <button className='btn btn-warning' onClick={() => { removeFromCart(e.id) }}>
                      <img src={remove_icon} alt="" />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          }
          return null; // Add this line to handle cases where cartItem[e.id] is not greater than 0
        })}
        </div>
        <div className="col-lg-4">
            <div className="row cart-detail-heading mb-3">
                <div>Cart Details</div>
            </div>
            <div className="row cart-item-price mb-3">
                <div className="col-lg-6">
                    <h3>Total</h3>
                </div>
                <div className="col-lg-6" style={{display:'flex',justifyContent:'flex-end'}}>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <div className="row cart-item-price mb-3">
                <div className="col-lg-6">
                    <h3>Shipping Fee</h3>
                </div>
                <div className="col-lg-6" style={{display:'flex',justifyContent:'flex-end'}}>
                    <h3>Free</h3>
                </div>
            </div>
            <hr className='ship-item-hr'/>
            <div className="row mt-3 cart-item-price">
                <div className="col-lg-6">
                    <h3>Total Price</h3>
                </div>
                <div className="col-lg-6" style={{display:'flex',justifyContent:'flex-end'}}>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <div className="row mt-3 cart-item-price" style={{textAlign:'right'}}>
                <h5>{settingMessage()}</h5>
            </div>
            <div className="row cart-item-price mt-3">
        <div className="col-lg-8" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            style={{ width: '100%' }}
            value={promoCodeInput}
            onChange={handlePromoCodeChange}
            placeholder="Enter promo code"
          />
        </div>
        <div className="col-lg-4 my-3">
          <button className='btn btn-info' onClick={handleTryCode}>
            Try Code
          </button>
        </div>
      </div>
            <div className="row cart-item-price mt-3">
                <button className='btn btn-success'>Check Out</button>
            </div>
        </div>
        </div>
        
    </div>
    </div>
  );
}

export default CartPage;

