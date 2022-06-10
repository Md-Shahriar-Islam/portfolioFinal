import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import "./Home.css"
import me from "../images/prabal.jpg"
import { FaBeer } from 'react-icons/fa';
import CardHolder from './CardHolder/CardHolder';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const project = useNavigate()
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch("skills.json")
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <div className="flex relative">

            <div className="half-front mx-4">
                <div classname="header pt-5">
                    <h1 className="text-5xl mt-10 ">
                        Hi! I AM</h1>
                    <h1 className="text-5xl mt-5">
                        MD SHAHRIAR ISLAM
                    </h1>
                    <p className="pt-2 mt-5">I am a react developer.In recently I have done some projects using reactJS. </p>
                    <button onClick={() => navigate("/contact")} className="btn mt-5 bg-cyan-600 px-10 ">Hire me</button>
                    <button onClick={() => project("/projects")} className="btn mt-5 btn-outline px-10 mx-2">my projects</button>

                    <h1 className="text-center text-3xl section-text mt-5">THINGS I HAVE WORKED WITH</h1>

                    <div className="card-library relative">
                        {
                            skills.map(skill => <CardHolder skill={skill}></CardHolder>)
                        }

                    </div>
                </div>





            </div>
            <div className="half-front mt-20">
                <img src={me} alt="my pic"></img>

            </div>


        </div>
    );
};

export default Home;