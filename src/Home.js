import React ,{useState}from 'react'
import food from './Assets/GS.avif'
import food1 from './Assets/smile.jpg'
import './css/Home.css'
import SplitText from "./SplitText"


const Home = () => {
  const [pic,setPic]=useState(food);
  function changePic(){
      setPic(food1)
    }
    function back(){
      setPic(food)
    }
    const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className='design'>
      <h1>welcome front page</h1>
      <SplitText
          text="Hello, GSAP!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      <div>
        <img src={pic}  alt='' onMouseEnter={changePic} onMouseLeave={back}/>
      </div>
      </div>
  )
}

export default Home

