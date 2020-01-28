import React from 'react'
import Logo from './Logo'
import Navigation from './Navigtion'

const Header = () => {
    return (
        <div className='header-container clearfix'>
            <div className='logo'>
                <Logo />
            </div>
            <div className='menu-nav'>
                <Navigation />
            </div>
        </div>
    )
}

export default Header;