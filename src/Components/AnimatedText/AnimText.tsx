import React, { FC } from "react";
import './AnimText.css';

interface props{
    Text: string;
    Size: any;
};
const AnimText:FC<props> = (props) => {
    const textSize = props.Size+"px";
    return(
        <div className="main-text-div">
            <div className="color-div"/>
            <p className="AnimText" style={{fontSize: textSize,cursor: "pointer"}}>{props.Text}</p>
        </div>
    );
};

export default AnimText;