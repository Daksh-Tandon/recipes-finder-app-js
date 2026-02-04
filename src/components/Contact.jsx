import React from 'react'
import "../contact.css"
const Contact = (props) => {
  return (
    <div className='contact'>
        <h2>For More Details Contact Me</h2>
        <br/>
        <div className="links">
        <a href='https://www.linkedin.com/in/daksh-tandon-1986b2322' target="_blank">
        <img src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg?semt=ais_hybrid&w=740&q=80" ></img>
        </a>

        <a href='https://github.com/Daksh-Tandon/' target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
        </a>
        </div>
    </div>
  )
}

export default Contact