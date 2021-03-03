import React, {Component} from 'react'

function ClassBar({digits, id}){
    
        return(
            <div className={`clock-stick ${id}`}>
                {digits.map((digit, index) => <div className={`clock-digits`}>{digit}</div>)}
            </div>
        )
    
}

export default ClassBar