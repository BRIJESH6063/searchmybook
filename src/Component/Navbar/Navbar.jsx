import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' ;
import logoImg from '../../Images/logo.png' ;
import {HiOutlineMenuAlt3} from 'react-icons/hi' ;

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, logout, user } = useAuth0();


  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            {
               <li className='nav-item nav-link text-uppercase text-white fs-22 fw-6 ls-1' >{isAuthenticated && <p>
                {/* <img className='width-20px' src="https://static.vecteezy.com/system/resources/thumbnails/005/276/776/small/logo-icon-person-on-white-background-free-vector.jpg" alt="" /> */}
                {user.name}</p>}</li>
            }
            {
              isAuthenticated ? (
                <li className='nav-item'>
                  <button className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                  </button>
              </li>
              ) : (
                <li className='nav-item'>
                  <button className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
