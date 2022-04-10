import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/WhatsApp Image 2022-04-07 at 4.44.56 PM.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dogacan Kaynak</h1>
        <h5 classname ="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header