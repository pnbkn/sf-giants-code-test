import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props)=> {
    return (
        <footer className="footer">
            <div className="social">
            <ul>
                {
                    props.social.map((url, idx) => <li key={idx}><a href={url.url}><FontAwesomeIcon icon={url.icon} /></a></li>)
                }
            </ul>
            </div>
            <div className="address">
                <h5>{props.name}<br/>
                {props.location}</h5>
            </div>
        </footer>
    )

}

export default Footer;