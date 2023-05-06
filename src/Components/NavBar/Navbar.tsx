import React from 'react'
import AnimText from '../AnimatedText/AnimText'
import './Nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="main-nav-div">
      <nav>
        <div style={{display: "flex"}}>
          <div style={{marginLeft: "20px", marginTop: "5px"}}>
            <a href="/" style={{textDecoration: "none"}}><AnimText Text='Home' Size="30"/></a>
          </div>
          <div style={{marginLeft: "20px", marginTop: "5px"}}>
            <a href="/Menu" style={{textDecoration: "none"}}><AnimText Text='Menu' Size="30"/></a>
          </div>
          <div style={{marginLeft: "20px", marginTop: "5px"}}>
            <a href="/Location" style={{textDecoration: "none"}}><AnimText Text='Location' Size="30"/></a>
          </div>
          <div style={{marginLeft: "20px", marginTop: "5px"}}>
            <a href="/Contact" style={{textDecoration: "none"}}><AnimText Text='Contact' Size="30"/></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar