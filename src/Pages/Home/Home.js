import React from 'react'
import Settings from "../../components/Settings/Settings"
import "./Home.css"
import Laboratory from '../../components/Laboratory/Laboratory';

const Home = () => {
    return (
        <div className='container'>
            <div className="left">
                <p className='title'>Home</p>
                <Laboratory />
                <Settings />
            </div>
            <div className='right'>
                <div className='recent-actions'>
                    <p>Recent actions</p>
                    <hr/>
                    <p>My actions</p>
                    <p>None available</p>
                </div>
            </div>
        </div>
    )
}

export default Home