import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className="headerWrapper">
            <span className="siteHeader">PersonalityTest</span>
            <button className="logoutButton">Results</button>
        </div>
    )
}

export default Header