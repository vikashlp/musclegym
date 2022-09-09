import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import log from './images/logo.png';




const Nav = () => {

    return (


        <>
            <header className='nav-main'>
                <div className='nav-logo'>
                    <a href = "/"><img className='logo' src={log} alt=""/></a>
                    <div className='tagname'><a href = "/">Muscle Up</a></div>
                </div>


                <ul className='nav-ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/equipments">Equipments</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>


            </header>




        </>

    )
}

export default Nav;