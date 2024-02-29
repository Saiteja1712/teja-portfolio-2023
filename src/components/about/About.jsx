import React from 'react'
import './about.css'
import Me from '../../assets/dp.jpg'
import {TbChessKnight} from 'react-icons/tb'
import {BiStar} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'> 
      <h5> Get To Know</h5>
      <h2> About Me</h2>

      <div className = "container about__container">
        <div className = "about__me">
          <div className = "about__me-image">
            <img src  = {Me} alt = "Me" />
          </div>
        </div>


        <div className = "about__content">
          <div className= "about__cards">
            <article className = "about__card">
              <TbChessKnight className='about__icon'/>
              <h5>LeetCode</h5>
              <small>Knight Badge Holder</small>
              <br />
              <small>Highest Rating : 2028</small>
            </article>

            <article className = "about__card">
              <BiStar className='about__icon'/>
              <h5>Codechef</h5>
              <small>3-star Coder</small>
              <br />
              <small>Highest Rating : 1706</small>
            </article>

            <article className = "about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
          I am self-motivated and a passionate programmer with 
          practical knowledge on programming and looking for an 
          opportunity which will provide development, growth and 
          make use of my existing skills
          </p>
          <a href='#contact' className = 'btn btn-primary'>Let's Talk</a>
        </div>
      </div>

      
    </section>
  )
}

export default About