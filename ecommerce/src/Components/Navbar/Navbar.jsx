
import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="nav">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            </div>
            <div className="navbar-right">
                <Link to="/cart"><ShoppingCartIcon style={{ fontSize: 30 }} /></Link>
                <Link to="/login"><AccountCircleIcon style={{ fontSize: 30 }} /></Link>
            </div>
        </div>
    );
};

export default Navbar;
