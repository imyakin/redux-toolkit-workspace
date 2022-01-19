import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsNavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-4">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/apple">Apple News</NavLink></li>
                    <li><NavLink to="/sports">Sports News</NavLink></li>
                    <li><NavLink to="/politics">Politics</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NewsNavBar
