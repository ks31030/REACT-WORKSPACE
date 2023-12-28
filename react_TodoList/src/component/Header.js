import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul> 
                    <li><Link to="/todo">할 일 목록</Link></li>
                </ul>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;