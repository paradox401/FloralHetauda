import React, { useEffect, useState } from "react";
import 'boxicons'
import './NavBar.css'

function NavBar(props){
    const [login, setLogin] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <nav>
            <img src="" alt="Floral Hetauda" />
            {isMobile ? (
                <div className="hamburger-menu">
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon"><i class='bx bx-menu'></i></label>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            ) : (
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            )}
            <div className="nav-icons">
                <button id="cart"><i class='bx bx-cart'></i></button>
                <button id="login">{login ? <i class='bx bx-user'></i> : "login"}</button>
            </div>
        </nav>
    )
}

export default NavBar