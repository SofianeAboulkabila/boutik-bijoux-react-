import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='left'>
                    <div className="item">
                        <img src="/img/france.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>EUR</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Bagues</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Boucles d'oreilles</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Bracelets</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/4">Colliers</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className='link' to="/">Boutik-bijoux</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to="/">FAQ</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/">Cookies</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon">
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
