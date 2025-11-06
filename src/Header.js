import React from 'react'
import { Link } from 'react-router-dom'
import './css/HeadFoot.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo-cont'>

<img src="https://yellowfoodie.netlify.app/static/media/Logo.e04f4319ea0059a833b1ca8d03810b60.svg" alt="" className='logo' />

        </div>
        <div>
            <ul className='header-item'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            

            </ul>
            </div>  
     </div>
  )
}

export default Header

