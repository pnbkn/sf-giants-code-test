import React from 'react';
import Fade from 'react-reveal/Fade';

const Hero = (props)=> {

    return (
        <header style={{backgroundImage: `url("${props.image}")` }}>
            <Fade bottom><h1>{props.team}</h1></Fade><br/>
            <Fade bottom> <h3>Est:{props.year}</h3></Fade>
        </header>
    )

}

export default Hero;