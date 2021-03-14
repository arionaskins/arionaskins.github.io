import React from 'react'

export const NavLink = () => {
    return (
        <div className='nav-btn-div'>
            <button className='nav-link-btn' type="button">{this.props.btnName}</button> 
        </div>
    )
}
