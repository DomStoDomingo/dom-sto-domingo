import React from "react";
import "../styles/TopRightContainer.css";
import Contact from "./Contact";
import linkedinImage from "../assets/svg/linkedin.svg";

const TopRightContainer = () => {
    return(
        <div className="tl-container flex flex-col gap-4 flex-auto">
            <div className="contacts-container flex justify-center items-center flex-wrap position-relative gap-4">
                <Contact image={linkedinImage} alt="linkedin"/>
                <Contact image={linkedinImage} alt="linkedin"/>
                <Contact image={linkedinImage} alt="linkedin"/>
                <Contact image={linkedinImage} alt="linkedin"/>
            </div>
            <div className="contacts-container glass flex justify-center items-center p-2">
                s
            </div>
        </div>
    );
}

export default TopRightContainer;