import React from "react";
import image from "../assets/svg/logoWhite.svg";
import "../styles/Logo.css";

const Logo = () => {
    return(
        <img src={image} alt="logo" className="portfolio-logo"/>
    );
}

export default Logo;