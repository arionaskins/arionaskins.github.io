import React from 'react';
import { NavLink } from './NavLink';

const NavBar = (props) => {

        return (

           <nav className='nav-bar-container'>
               <div className='nav-menu'>
                    {/* <h3 id='scrollY'>{props.scrollPos}</h3> */}
                    <NavLink  to='#about' id='nav-about' name={'About'} active='' />
                    <NavLink  to='#whatIdo' id='nav-whatIdo' name={'What I Do'} active='' />
                    <NavLink  to='#projects' id='nav-projects' name={'Projects'}  active=''/>
                    <NavLink  to='#contact' id='nav-contact' name={'Contact'} active='' />
                </div>
            </nav>
        );
    }


/* // chnage a.id {nav-about,,;} padding-bottom color when scrolled  */
export default NavBar;