import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'boxicons';
import './NavBar.css';
import { assets } from "../../assets/assets";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [login, setLogin] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" onClick={closeMenu}>
                <img src={assets.logo} alt="Floral Hetauda" />
            </Link>

            <div className="hamburger" onClick={toggleMenu}>
                <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
            </div>

            <ul className={menuOpen ? "active" : ""}>
                <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
                <li><Link to="/about" onClick={closeMenu}>ABOUT US</Link></li>
                <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>

                <div className="mobile-nav-icons">
                    <Link to="/cart" id="cart" onClick={closeMenu}>
                        <i className='bx bx-cart'></i>
                    </Link>
                    <button id="login" onClick={closeMenu}>
                        {login ? <i className='bx bx-user'></i> : "Login"}
                    </button>
                </div>
            </ul>

            <div className="nav-icons">
                <Link to="/cart" id="cart">
                    <i className='bx bx-cart'></i>
                </Link>
                <button id="login">
                    {login ? <i className='bx bx-user'></i> : "Login"}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
