
import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from '../Dropdown/Dropdown'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div className="navbar">
        <MenuIcon/>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            </div>
            <div className="navbar-right">
                <Link to="/cart"><ShoppingCartIcon style={{ fontSize: 30 }} /></Link>
                <div className='dropdown'><Dropdown/></div>
               
            </div>
        </div>
    );
};

export default Navbar;
