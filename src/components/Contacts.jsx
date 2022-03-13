import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contacts = (props) => {
    return (
        <div className="contacts">
            <a href="tel:0532498427" className="link-default">
                <span>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                </span> {props.phone} 
            </a>
            <a href="mailto:mamlin.ira@gmail.com" className="link-default">
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span> {props.email} 
            </a>
        </div>
    )
}

export default Contacts;