import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = (props) => {
    return (
        <div className="contacts">
            <a href={`tel:${props.phone}`} className="link-default">
                <span>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                </span> {props.phone} 
            </a>
            <a href={`mailto:${props.email}`} className="link-default">
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span> {props.email} 
            </a>
            <a href={props.github} target='_blank' rel='noreferrer' className="link-default">
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                </span> github.com
            </a>
            <a href={props.linkedin} target='_blank' rel='noreferrer' className="link-default">
                <span>
                    <FontAwesomeIcon icon={faLinkedin} />
                </span> linkedin.com
            </a>
        </div>
    )
}

export default Contacts;