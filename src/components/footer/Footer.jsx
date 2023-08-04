import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>KGST</a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href = 'https://www.instagram.com/k.g.s.teja/' target='_blank'><FiInstagram /></a>
        <a href = 'https://www.linkedin.com/in/ganapathi-sai-teja-kalla-a9a645215/' target='_blank'><BsLinkedin /></a>
      </div>

      <div classname='footer__copyright'>
        <small>&copy; KGST . All rights reserved</small>
      </div>
    </footer>

  )
}

export default Footer