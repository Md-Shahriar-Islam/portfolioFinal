import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import myCv from "../../images/Md Shahriar Islam resume.pdf"

const Header = () => {
    return (
        <div>
            <div className="navbar bg-cyan-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-color-black"><Link to="/home">Home</Link></li>
                            <li className="text-color-black"><Link to="/blog">Blogs</Link></li>
                            <li className="text-color-black"><Link to="/contact">Contact Me</Link></li>
                            <li className="text-color-black"><Link to="/projects">Projects</Link></li>
                        </ul>
                    </div>
                    <a className=" btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-0">
                        <li className="mx-2 text-color"><Link to="/home">Home</Link></li>
                        <li className="text-color "><Link to="/blog">Blogs</Link></li>
                        <li className="text-color mx-2"><Link to="/contact">Contact Me</Link></li>
                        <li className="text-color"><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={myCv} download="Shahriar's resume" className="btn">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Header;