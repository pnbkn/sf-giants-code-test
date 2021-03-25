import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = ({description})=> {

    return (
        <section className="description">
            <Fade bottom><p>{description}</p></Fade>
        </section>
    )

}

export default Description;