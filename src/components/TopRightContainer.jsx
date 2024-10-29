import React from "react";
import "../styles/TopRightContainer.css";
import Contact from "./Contact";

const TopRightContainer = () => {
    return(
        <div className="tl-container flex flex-col gap-4 flex-auto">
            <div className="contacts-container glass flex justify-center items-center gap-4">
                <Contact image="../assets/svg/linkedin.svg" alt="linkedin"/>
            </div>
            <div className="contacts-container glass flex justify-center items-center p-2">
                s
            </div>
        </div>
    );
}

export default TopRightContainer;