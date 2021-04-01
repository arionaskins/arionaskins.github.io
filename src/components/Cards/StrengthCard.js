import React from 'react'

const StrengthCard = (props) => { 

        return ( 
            <div className={`strength-card ${ props.class }`} id={props.id}>
                <div className='strength-icon-container'>
                        <img className='strength-icon' src={props.icon}
                            alt={props.altTxt} id={`${props.id}-icon`}></img>
                </div>
                <div><h4 className='strength-title'>{props.cardTitle}</h4></div>
                {props.children}
            </div>
         );
}
 

export default StrengthCard;