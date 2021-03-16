import React from 'react';
import { NavLink } from './NavLink';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

           <nav className='nav-bar-container'>
               <div className='nav-menu'>
                    <NavLink  to='' name={'About'}  />
                    <NavLink  to='' name={'What I Do'}  />
                    <NavLink  to='' name={'Projects'}  />
                    <NavLink  to='' name={'Contact'}  />
                </div>
            </nav>
        );
    }
}
