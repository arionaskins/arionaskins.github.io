import React from 'react'

export const NavLink = (props) => {
    return (
        <div className='nav-link-div'>
            <a href={props.to} className='nav-link' >{props.name}</a>
        </div>
    )
}
