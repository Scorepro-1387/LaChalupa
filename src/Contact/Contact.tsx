import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import './page.css'
const Contact = () => {
  const Phonenumber = "+1(419)726-0700";
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="maincontactview">
            <div style={{paddingTop: "40px"}}>
                <h1 style={{
                  margin: "10px"
                }}>Contact</h1>
                <h1>Phone Number:</h1>
                <h1 style={{
                  margin: "10px"
                }}>{Phonenumber}</h1>
              </div>
        </div>
    </div>
  )
}
export default Contact