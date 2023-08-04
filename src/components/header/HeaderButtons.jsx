import React from 'react'
import resume from '../../assets/ResumePort.pdf'
import '../../index.js'
const HeaderButtons = () => {
  return (
    <div className="hb">
        <a href = {resume} download className = 'btn'>Download Resume</a>
        <a href = "#contact" className = 'btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default HeaderButtons