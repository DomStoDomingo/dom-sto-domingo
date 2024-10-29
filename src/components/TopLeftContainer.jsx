import React from "react";
import Logo from "./Logo";
import "../styles/TopLeftContainer.css";

const TopLeftContainer = () =>{
    return(
        <div className="glass tl-container flex-auto p-4">
            <div className="logo-container flex justify-center items-center p-2">
                <Logo />
            </div>
        </div>
    );
}

export default TopLeftContainer;