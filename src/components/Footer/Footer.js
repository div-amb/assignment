import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <button className='footer-btn'>
                <div className='footer-btn-content'>
                    <i class="fa-brands fa-apple"></i>
                    <div>Download on the<br/><span className='app-store'> App Store</span></div>
                </div>
            </button>
            <p>Celly.AI Corporation, © 2022 All rights reserved. Version 2.0.0</p>
        </div>
    )
}

export default Footer