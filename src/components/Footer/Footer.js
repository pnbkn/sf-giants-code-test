import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';

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
                <Fade bottom><h5>{props.name}<br/></h5></Fade>
                <Fade bottom cascade><h5>{props.location}</h5></Fade>
            </div>
        </footer>
    )

}

export default Footer;