import React, { useEffect, useState } from "react";
import 'boxicons'
import './NavBar.css'

function NavBar(props){
    const [login, setLogin] = useState(false)
    return(
        <nav>
            <img src="" alt="Floral Hetauda" />
            
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
            <div className="nav-icons">
            <button id="cart"><i class='bx bx-cart'></i></button>
            <button id = "login" > {login ? <i class='bx bx-user'></i> : "login" }</button>
            </div>
            
        </nav>
    )
}

export default NavBar