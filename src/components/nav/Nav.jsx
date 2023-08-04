import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {PiFileTextBold} from 'react-icons/pi';
import {MdOutlineWebStories} from 'react-icons/md';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav> 
        <a href='#home' onClick ={ () => setActiveNav('#')} className= {activeNav === "#" ? "active":""}><AiOutlineHome /></a>
        <a href='#about' onClick ={ () => setActiveNav('about')} className= {activeNav === "about" ? "active":""}><AiOutlineUser /></a>
        <a href='#skills' onClick ={ () => setActiveNav('skills')} className= {activeNav === "skills" ? "active":""}><PiFileTextBold /></a>
        <a href='#projects' onClick ={ () => setActiveNav('projects')} className= {activeNav === "projects" ? "active":""}><MdOutlineWebStories /></a>
        <a href='#contact' onClick ={ () => setActiveNav('contact')} className= {activeNav === "contact" ? "active":""}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav