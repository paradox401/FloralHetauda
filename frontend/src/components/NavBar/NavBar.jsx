import React, { useEffect, useState } from "react";
import 'boxicons'
import './NavBar.css'

function NavBar(props){
    const [login, setLogin] = useState(false)
    return(
        <nav>
         <a href="#">  <img src="" alt="Floral Hetauda" /></a> 
            
            <ul>
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">ABOUT US</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
            <div className="nav-icons"> 
            <button id="cart"><i class='bx bx-cart'></i></button>
            <button id = "login" > {login ? <i class='bx bx-user'></i> : "Login" }</button>
            </div>
            
        </nav>
    )
}

export default NavBar