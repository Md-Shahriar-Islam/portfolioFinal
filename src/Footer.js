import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer fixed bootom-0  mt-10 lg:absolute">
            <footer class="footer p-0 bg-neutral text-neutral-content">
                <div>

                    <p>Copyright © {year} - All right reserved<br></br></p>
                </div>
                <div>
                    <span class="footer-title">Social</span>
                    <div class="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/shahriar-islam-66a7a8198/"><FaLinkedinIn className="text-2xl" /></a>
                        <a href="https://github.com/Md-Shahriar-Islam"><BsGithub className="text-2xl" /></a>
                        <a href="https://www.facebook.com/shahriarislam.prabal/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;