import React, { createContext, useState } from "react";
import all_product from "../Components/Assests/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [discountApplied, setDiscountApplied] = useState(false);
  const [message,setMessage] = useState('IF YOU HAVE A PROMOCODE APPLY HERE')
  const [cartabvezer, setcartabovezero] = useState(false)

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const applyPromoCode = (code) => {
    // Assume SPARKLE20 is the valid promo code
    if (code === "SPARKLE20") {
      setDiscountApplied(true);
    } else {
      alert("Invalid promo code. Please try again.");
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }

    // Apply discount if it's applied
    if (discountApplied) {
      if(totalAmount>0){
        totalAmount *= 0.8
      }else{
        alert('To Avail Discount add Items to your Cart')
      }
    }

    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
        }
    }
    if(totalItem>0){
        setcartabovezero(true)
    }
    return totalItem;
  };

  const settingMessage = () => {
    if(discountApplied && cartabvezer){
        setMessage('PROMOCODE APPLIED')
    }
    else if(cartabvezer){
        setMessage("INSERT PROMOCODE FOR DISCOUNT")
    }else if(!cartabvezer){
        setMessage('ADD ITEM TO YOUR CART TO AVAIL DISCOUNT')
    }
    return message
  }

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
    applyPromoCode,
    settingMessage
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
