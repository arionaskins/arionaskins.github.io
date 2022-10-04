import React from 'react'

export const NavLink = (props) => {
    return (
            <a href={props.to} 
                className=' nav-link-div nav-link'
                id={props.id}>{props.name}</a>
    )
}

// chnage a.id {nav-about,,;} padding-bottom color when scrolled 