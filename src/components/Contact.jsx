import React from "react";
import "../styles/Contact.css";

const Contact = ( props ) => {
    return(
        <div className="glass contact-item flex justify-center items-center p-2">
            <img src={props.image} alt={props.alt} className="contact-image w-full h-auto"/>
        </div>
    );
}

export default Contact;