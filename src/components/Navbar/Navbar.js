import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className='header-container'>
                <div className='logo'>
                    <Link exact="true" to='/' className='nav-brand'>
                        <p className='brand'>Celly.AI</p>
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to="/" className='nav-home'>Home</Link>
                    <Link to="/user" className='nav-user'>User</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar