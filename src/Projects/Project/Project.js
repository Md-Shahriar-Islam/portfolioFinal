import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import "./Project.css"

const Project = (props) => {
    const { name, image, points, website, server, code } = props.data
    return (
        <div>
            <div className="project-body">
                <img className="project-image" src={image} alt="project image"></img>
                <h1 className="text-3xl mx-2">{name}</h1>

                <ul className="mx-2">
                    {
                        points.map(point => <li>{point}</li>)
                    }
                </ul>
                <a className="btn mx-2" href={website}>site</a>
                <a className="btn" href={server}>server</a>
                <a className="btn mx-2" href={code}>client</a>

            </div>

        </div>
    );
};

export default Project;