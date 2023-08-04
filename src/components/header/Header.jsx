import React from 'react'
import "./header.css"
import HeaderButtons from './HeaderButtons'
import Me from '../../assets/IMG_20230731_213620_1_-removebg-preview.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div id='home' className = "container header__container">
            <h4>Hello I'm</h4>
            <h1>Ganapathi Sai Teja Kalla</h1>
            <h4 className="text-light">FullStack Developer</h4>
            <HeaderButtons />
            <HeaderSocials />
            <div className = "me">
                <img src = {Me} alt="My Pic"></img>
            </div>
            <div className = 'scroll__down'>
                <a href = "#contact" > Scroll Down</a>
            </div>
        </div>
    </header>
  )
}

export default Header