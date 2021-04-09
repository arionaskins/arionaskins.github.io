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
                    <NavLink  to='#about' name={'About'} active='' />
                    <NavLink  to='#whatIdo' name={'What I Do'} active='' />
                    <NavLink  to='#projects' name={'Projects'}  active=''/>
                    <NavLink  to='#contact' id='nav-contact' name={'Contact'} active='' />
                </div>
            </nav>
        );
    }
}
