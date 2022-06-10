import React, { useEffect, useState } from 'react';
import Project from './Project/Project';
import "./Projects.css"
const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
    return (
        <div className="h-screen project-library mx-4 mt-5 relative">
            {
                projects.map(data => <Project data={data} ></Project>)
            }
        </div>
    );
};

export default Projects;