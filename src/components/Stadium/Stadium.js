import React from 'react';
import Fade from 'react-reveal/Fade';

const Stadium = (props)=> {
    return (
        <section className="stadium">
           <div className="img-stadium"><img src={props.image} alt="Oracle Park"/></div>
           <div className="desc-stadium">
           <Fade right><h2>{props.name}</h2></Fade>
           <Fade right> <p>{props.description}</p></Fade>
           <Fade right><h5>Capacity: {props.capacity}</h5></Fade>
           <Fade right><h5>Location: {props.location}</h5></Fade>
           </div>
        </section>
    )

}

export default Stadium;