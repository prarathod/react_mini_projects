import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/about/prajwal'>profile</Link></li>
        </ul>
    )
}

export default NavBar