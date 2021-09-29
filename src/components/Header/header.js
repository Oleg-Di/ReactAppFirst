import React from 'react'
import './header.scss'
import Logo from './HeaderLogo/logo';
import HeaderItems from './HeaderItems/headerItems';

const Header = () => {

    return (
        <div className='Header'>
           <Logo/>
           <HeaderItems/>
        </div>
    )
}

export default Header;