import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {SiCodechef} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className = 'header__socials'>
        <a href="https://www.linkedin.com/in/ganapathi-sai-teja-kalla-a9a645215/" target="_blank" className='hs__icon'><BsLinkedin /></a>
        <a href="https://www.leetcode.com/SaiTeja44d/" target="_blank" className='hs__icon'><SiLeetcode /></a>
        <a href="https://www.codechef.com/users/saiteja_44d" target="_blank" className='hs__icon'><SiCodechef /></a>
        <a href="https://github.com/SaiTeja44d" target="_blank" className='hs__icon'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials