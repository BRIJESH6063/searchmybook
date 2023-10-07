import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../Searchform/Searchform";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to Our Digital Haven for Knowledge Seekers. Ignite Your Imagination. Your Gateway to a Universe of Stories Awaits. Embrace the Power of Learning.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}



export default Header ;

