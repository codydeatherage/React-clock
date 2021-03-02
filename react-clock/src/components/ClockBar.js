import React, {Component} from 'react'

function ClassBar({digits}){
    
        return(
            <div className="clock-stick">
                {digits.map((digit, index) => <div className="clock-digits">{digit}</div>)}
            </div>
        )
    
}

export default ClassBar