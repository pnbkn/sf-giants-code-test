import React from 'react';

const Hero = (props)=> {

    return (
        <header style={{backgroundImage: `url("${props.image}")` }}>
            <h1>{props.team}</h1><br/>
            <h3>Est:{props.year}</h3>
        </header>
    )

}

export default Hero;