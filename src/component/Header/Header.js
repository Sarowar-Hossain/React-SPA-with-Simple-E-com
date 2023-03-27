import React from 'react';
import logo from '../../images/Logo.svg'
import'./Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className='menus'>
                <a href="/order">Order</a>
                <a href="/order-review">Order review</a>
                <a href="inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;