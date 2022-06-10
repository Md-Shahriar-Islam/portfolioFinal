import React from 'react';
import "./CardHolder.css"

const CardHolder = (props) => {
    const { name, image } = props.skill
    return (
        <div className="card-content">
            <div>
                <img className="card-image" src={image} alt="skills image"></img>
                <h1 className="text-2xl text-center">{name}</h1>
            </div>

        </div>
    );
};

export default CardHolder;