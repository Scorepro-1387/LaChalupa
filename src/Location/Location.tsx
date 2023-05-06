import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import './location.css'
const Locations = () => {
  return (
    <div>
        <div style={{}}>
          <Navbar/>
        </div>
        <div className='mainviewlocation'>
          <img src={require('./Location.png')} alt="Breaker1" unselectable="on" draggable="false"
          height="200" width="200"/>
            <h1 style={{
                  margin: "10px",
                  fontSize: "50px"
                }}>Location</h1>
                <h4 className="adress" style={{
                  margin: "10px"
                }}>6186 N Summit St, Toledo, OH 43611</h4>
                <a className="adress" style={{
                  margin: "20px",
                  color: "#E24C00"
                }} target="_blank" rel="noopener noreferrer"
                href="https://www.google.com/maps/place/La+Chalupa/@41.7307777,-83.4785614,17z/data=!3m1!4b1!4m6!3m5!1s0x883b8276c4801f03:0xb44e4a49e7db8d62!8m2!3d41.7307777!4d-83.4785614!16s%2Fg%2F11btrrqsvc?hl=en-US"
                >Open in Google Maps</a>
                <br/>
                <p style={{color: "#222"}}>-</p>
                <a className="adress" style={{
                  margin: "50px",
                  color: "#E24C00",

                }}
                href="https://maps.apple.com/?address=6186%20N%20Summit%20St,%20Toledo,%200H%20%2043611,%20United%20States&auid=8871260466668453794&||=41.730621.-83.478645&|sp=9902&q=La%20Chalupa%20Mexican%20Restaurant&t=m"
                >Open in Apple Maps</a>
            </div>
    </div>
  )
}
export default Locations