import React, { useState } from "react";
import 'boxicons';
import './NavBar.css';
import { assets } from "../../assets/assets";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [login, setLogin] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to close menu when clicking a link
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <a href="#">
                <img src={assets.logo} alt="Floral Hetauda" />
            </a>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
            </div>

            {/* Menu */}
            <ul className={menuOpen ? "active" : ""}>
                <li><a href="#" onClick={closeMenu}>HOME</a></li>
                <li><a href="#" onClick={closeMenu}>ABOUT US</a></li>
                <li><a href="#" onClick={closeMenu}>FAQ</a></li>

                {/* Nav Icons Inside Menu for Mobile */}
                <div className="mobile-nav-icons">
                    <button id="cart" onClick={closeMenu}>
                        <i className='bx bx-cart'></i>
                    </button>
                    <button id="login" onClick={closeMenu}>
                        {login ? <i className='bx bx-user'></i> : "Login"}
                    </button>
                </div>
            </ul>

            {/* Desktop Nav Icons */}
            <div className="nav-icons">
                <button id="cart"><i className='bx bx-cart'></i></button>
                <button id="login">{login ? <i className='bx bx-user'></i> : "Login"}</button>
            </div>
        </nav>
    );
}

export default NavBar;
