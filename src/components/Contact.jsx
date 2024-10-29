import React from "react";

const Contact = ( props ) => {
    return(
        <div className="glass contact-item flex justify-center items-center">
            <img src={props.image} alt={props.alt} className="contact-image"/>
        </div>
    );
}

export default Contact;