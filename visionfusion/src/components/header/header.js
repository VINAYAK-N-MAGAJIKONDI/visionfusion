import React from 'react'
import logo from "./logo.jpeg"
import "./header.css";

export default function Header(){

    return(
        <>
       <header>
        <div class="nav-menu">
        <img src={logo} alt="Digit-Ally" class="logo"/>
                <div class="options">  
                <a href="/Dashboard" id="optionsb">User Dashboard</a>
                <a href="/Bliss" id="optionsb">Bliss Today</a>
                <a href="/Aboutus" id="optionsb">About Us </a>
                <a href="/" id="optionsb">Home</a>
                 </div>
        </div>
    </header>
        </>
    );
}



    

