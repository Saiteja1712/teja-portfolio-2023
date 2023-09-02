import React from 'react'
import './projects.css'
import P1 from "../../assets/project1.avif"

const data = [
  {
    id :1,
    image : P1,
    title : 'Snakes And Ladders',
    github : 'https://github.com/SaiTeja44d/SnakesAndLaddersConsole'
  },
  {
    id :2,
    image : P1,
    title : 'Todo List',
    github : 'https://github.com/SaiTeja44d'
  },
  {
    id :3,
    image : P1,
    title : 'Drum Kit',
    github : 'https://github.com/SaiTeja44d/drums'
  },
  {
    id :4,
    image : P1,
    title : 'QR-Code Generator',
    github : 'https://github.com/SaiTeja44d/QR-Code-Generator-teja-node'
  },
  {
    id :5,
    image : P1,
    title : 'Dice Game',
    github : 'https://github.com/SaiTeja44d/DiceGame-Project'
  },
  {
    id :6,
    image : P1,
    title : 'This Portfolio',
    github : 'https://github.com/SaiTeja44d/teja-portfolio-2023'
  }
]
const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      
      <div className = "container projects__container">
        {
          data.map(({id, image, title, github}) =>{
            return (
              <article key={id} className = "projects__item">
                <div className="projects__item-image">
                  <img src={image} alt="Project"/>
                </div>
                <h3>{title}</h3>
                <div className="projects__item-HeaderButtons">
                  <a href= {github} className='btn' target='_blank'>GitHub</a>
                </div>
              </article> )
          })
        }
      </div>
    </section>
  )
}

export default Projects