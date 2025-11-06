import React, {useState} from 'react'
import './css/About.css'
const About = () => {
   const [count,setCount]=useState(0)
   function increment(){
    setCount(count+1)
   }
  return (
    <div className='about'>
      <h1>Count</h1>
      <div className='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>Count</button>
    </div>
    </div>
  )
}

export default About
