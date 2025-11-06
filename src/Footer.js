import React, { useState } from 'react'
import './css/Footer.css'
import Flower from './Assets/flower.jpg'

const Footer = () => {
    const[like, setLike]=useState(Flower)
    function pick(){
        setLike()
    }
  return (
    <div className='narmu'>
        <div>
            <h5>Bio</h5>
            <p>Name:Sathiya S</p>
            <p>Email: <a href="mailto:sathiyasakthivel909@gmail.com">narmadhadevim934@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/narmadha-devi-048181303" target="_blank">view profile</a></p>
            <p>GitHub: <a href="https://github.com/Narmadhadevi934" target="_blank">view projects</a></p>
            <p>contact no.: 9342493441</p>
        </div>
        
    
    
         <div>
            <center>
                <img className='company1' src={like}></img>
            </center>
        </div>
        <div className='company'>
            <p>CompanyName: yellowmatics</p>
            <p>Area: Erode</p>
        </div>
    </div>
  )
}

export default Footer
