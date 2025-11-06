import React from 'react'
import Footer from './Footer'

import Home from './Home'
import Contact from './Contact'
import About from './About'
import Header from './Header'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>

      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
          <div>
            <Footer/>
          </div>
         </Router>
        
    </div>
  )
}
export default App
