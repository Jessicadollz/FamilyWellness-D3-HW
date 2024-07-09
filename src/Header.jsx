import React from "react";
import './Header.css';

function Header() {
    return (
        <>
        <div className="header">
            <br />
        <h1>Family Wellness <br /> <span>
        MASSAGE THERAPY</span></h1>

        <div className="navLinks">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">FAQ</a>
            <a href="#">CONTACT</a>
        </div>
        </div>
        </>
    );
}

export default Header;