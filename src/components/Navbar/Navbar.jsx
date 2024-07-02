import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../food del assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home" )
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>home</Link> 
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu==='contact'?"active":""}>contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" srcset="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" srcset="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
