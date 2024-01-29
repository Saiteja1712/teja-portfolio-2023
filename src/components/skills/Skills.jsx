import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id = 'skills'>
      <h5> What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className = "container skills__container">
        <div className = "skills__frontend">
          <h3> Frontend Development</h3>
          <div className = "skills__content">
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of frontend part */}
        <div className = "skills__backend">
        <h3> Backend Development</h3>
          <div className = "skills__content">
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className = "skills__details">
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>REST APIs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills