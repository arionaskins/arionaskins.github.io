import React from 'react'

export const NavLink = (props) => {
    return (
                <a href={props.to} className=' nav-link-div nav-link'
                     to={props.to}>{props.name}</a>
    )
}

// chnage a.id {nav-about,,;} padding-bottom color when scrolled 