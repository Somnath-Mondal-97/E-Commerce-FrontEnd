import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {

  const {getTotalCartItem} = useContext(ShopContext)

  const [isActive,setIsActive] = useState(false)
  const [tableMenu,setTableMenu] = useState(false)

  const [menu,setMenu] = useState("")

  const toggleMenu = () => {
    setIsActive(!isActive);
    setTableMenu(!tableMenu);
  };

  const smallMenuOnClick = () => {
    setIsActive(false)
    setTableMenu(false)
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row navbar-container">
        
            <div className="col-lg-3 logo_and_title">
              <img src={logo} alt="" />
                <Link to="/" className='kg_title' onClick={()=>{setMenu('KGTitle')}}><h3>Kolkata Garments</h3></Link>
            </div>
            <div className='col-lg-6 nav-menu-div'>
                <ul className='nav-menu'>
                    <li className={`nav-menu-item ${menu === 'Men' ? 'bold-text' : ''}`} onClick={()=>{setMenu('Men')}}><Link to='/men' className='kg_title'>Men</Link></li>
                    <li className={`nav-menu-item ${menu === 'Women' ? 'bold-text' : ''}`} onClick={()=>{setMenu('Women')}}><Link to='/women' className='kg_title'>Women</Link></li>
                    <li className={`nav-menu-item ${menu === 'Kids' ? 'bold-text' : ''}`} onClick={()=>{setMenu('Kids')}}><Link to='/kids' className='kg_title'>Kids</Link></li>
                    <li className={`nav-menu-item ${menu === 'allProducts' ? 'bold-text' : ''}`} onClick={()=>{setMenu('allProducts')}}><Link to='/allProducts' className='kg_title'>All Products</Link></li>
                </ul>
            </div>
            <div className="col-lg-3">
            <div className='login_and_cart_icon'>
              <Link to='/login'><button className='login-button' onClick={()=>{setMenu('login')}}>LogIn</button></Link>
            
    <div className='cart-container'>
      <Link to="/cart"><img src={cart_icon} alt="Cart" />
        <span className='cart-count' onClick={()=>{setMenu('cart')}}>{getTotalCartItem()}</span></Link>
    </div>
</div>
              <div className={`hamburger-menu-div ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
              <div className='hamburger-menu'>
                  <div className='bar'></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
              </div>
              </div>
            </div>
        </div>
        <div className={`row ${tableMenu ? 'table_menu' : 'hide'} `}>
            <ul className={`${tableMenu ? 'table-menu-nav':'hide'}`}>
              <li className='small_menu_item' onClick={smallMenuOnClick}>Men</li>
              <li className='small_menu_item' onClick={smallMenuOnClick}>Women</li>
              <li className='small_menu_item' onClick={smallMenuOnClick}>Kids</li>
              <li className='small_menu_item' onClick={smallMenuOnClick}>All Products</li>
              <li onClick={smallMenuOnClick}><button className='login-button'>LogIn</button></li>
              <li onClick={smallMenuOnClick}><div className='cart-container'>
        <img src={cart_icon} alt="Cart" />
        <span className='cart-count'>{getTotalCartItem()}</span>
    </div></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
