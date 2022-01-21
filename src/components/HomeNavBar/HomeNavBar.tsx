import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeNavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-4">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/apple">Apple News</NavLink></li>
                    <li><NavLink to="/bbc">BBC News</NavLink></li>
                    <li><NavLink to="/bitcoin">Bitcoin</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default HomeNavBar
