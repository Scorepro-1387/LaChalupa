import React from 'react'
import './Homepage.css';
import { FC } from 'react'
import AnimText from '../AnimatedText/AnimText';

interface ButtonInputs{
    linkto: any;
    Text: string;
}
const LinkButton:FC<ButtonInputs> = (props) => {
    return(
        <a href={props.linkto} style={{textDecoration: "none", margin: "20px",padding: "5px", 
        backgroundColor: "#394867", borderRadius: "5px"}}
        ><AnimText Text={props.Text} Size={35}/></a>
    )
}

const Homepage = () => {
  return (
    <div>
        <div className='main-homepage-div'>
            <div>
                <div style={{width: "100%",zIndex: "-1",marginTop: "-510px"}}>
                    <img src={require("./mp.png")} alt="Background" 
                    style={{
                        filter: "brightness(50%)",
                        minHeight: "400px",maxHeight: "500px",backgroundRepeat: "repeat",
                        minWidth: "100vw"
                    }}/>
                </div>
                <div className='main-view-for-picture'>
                    <div className='introtext'>
                        <h1 className="titletext">La Chalupa</h1>
                        <h1 className="titlesubtext">Mexican Resturant</h1>
                        <h1 className="titlesubtext">Dine-in · T akeout · No delivery</h1>
                        <div className='links-dev'>
                            <LinkButton Text='Menu' linkto="/Menu"/>
                            <LinkButton Text='Location' linkto="/Location"/>
                            <LinkButton Text='Contact' linkto="/Contact"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage