import React from 'react';


const Stadium = (props)=> {
    return (
        <section className="stadium">
           <div className="img-stadium"><img src={props.image} alt="Oracle Park"/></div>
           <div className="desc-stadium">
               <h2>{props.name}</h2>
               <p>{props.description}</p>
               <h5>Capacity: {props.capacity}<br/>
               Location: {props.location}</h5>
           </div>
        </section>
    )

}

export default Stadium;