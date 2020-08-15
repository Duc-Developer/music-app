import React, { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import classNames from 'classnames'
import "./Loading.css"

export default function Loading() {

    let [color, setColor] = useState("RED")

    useEffect(() => {
        const listener = setInterval(() => {setColor(getNextColor(color))},2000)
        return () => clearInterval(listener)
    },[color])

    function getNextColor(currentColor) {
        switch(currentColor) {
            case "RED":
                console.log("tra lan 1")
                return "YELLOW"
            case "YELLOW":
                console.log("tra lan 2")
                return "BLUE"
            default:
                console.log("tra default")
                return "RED"
        }
    }

    return <div className="Loading">
        <ArrowForwardIosIcon 
        fontSize="large" 
        className={classNames( "default-arrow-icon",
            { "arrow-icon-is-active-red": color === "RED" }
        )}/>
        <ArrowForwardIosIcon 
        fontSize="large"
        className={classNames( "default-arrow-icon",
            { "arrow-icon-is-active-yellow": color === "YELLOW" }
        )}
         />
        <ArrowForwardIosIcon 
        fontSize="large"
        className={classNames( "default-arrow-icon",
            { "arrow-icon-is-active-blue": color === "BLUE" }
        )}
         />
    </div>
}