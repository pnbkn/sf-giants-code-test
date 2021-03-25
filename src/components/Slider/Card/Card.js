import React from 'react';

const Card = ({image}) => {
    return(
        <li className="card">
            <img src={image} alt="Fan Art"/>
        </li>
    )
}

export default Card;