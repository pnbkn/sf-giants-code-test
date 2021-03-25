import React from 'react';
import Card from './Card/Card';

const Slider = (props)=> {
    return (
        <section className="slider">
            <ul>
                {
                    props.fanart.map((art, idx) => <Card key={idx} image={art.url}/>)
                }
            </ul>
        </section>
    )

}

export default Slider;