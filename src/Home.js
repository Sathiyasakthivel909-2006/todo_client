import React ,{useState}from 'react'
import food from './Assets/GS.avif'
import food1 from './Assets/smile.jpg'
import './css/Home.css'

const Home = () => {
  const [pic,setPic]=useState(food);
  function changePic(){
      setPic(food1)
    }
    function back(){
      setPic(food)
    }
  return (
    <div className='design'>
      <h1>welcome front page</h1>
      <div>
        <img src={pic}  alt='' onMouseEnter={changePic} onMouseLeave={back}/>
      </div>
      </div>
  )
}

export default Home

