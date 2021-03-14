import React from 'react';
import { NavLink } from './NavBar/NavLink';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

           <div className='nav-bar-container'>
                <NavLink  btnName={'About'}  />
                <NavLink  btnName={'What I Do'}  />
                <NavLink  btnName={'Projects'}  />
                <NavLink  name={'Contact'}  />
            </div>
        );
    }
}
