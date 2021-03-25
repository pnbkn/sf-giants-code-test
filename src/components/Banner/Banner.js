import React from 'react';

const Banner = ({url}) => {
    return(
        <section className="banner">
           <img src={url} alt="Banner"/>
        </section>
    )
}

export default Banner;