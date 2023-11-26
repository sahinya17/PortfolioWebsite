import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";

// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="navlink">
            <img className="logo" src={Logo} alt="Sahinya Akila" />
            <div className="logo-name">Sahinya Akila</div>
        </NavLink>
        <div className="nav-elements">
          <ul>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/experience">Experience</NavLink>
              
            </li>
            <li>
                <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// function Navbar () {
//     return(
//         <>
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to="/"> Home </Link>
//                 <Link to="/education"> Education </Link>
//                 <Link to="/experience"> Experience </Link>
//                 <Link to="/projects"> Projects </Link>
//             </div>
//         </nav>
//         </>
//     );
// };

export default Navbar;