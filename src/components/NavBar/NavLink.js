import React from 'react'

export const NavLink = (props) => {
    return (
            <a href={props.to} 
                className=' nav-link-div nav-link'
                id={props.id}>{props.name}</a>
    )
}
