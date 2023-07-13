import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-center text-white">

                <p className="text-sm">Diseñado y desarrollado por Javier Medina</p>
                <div className="flex items-center ml-4">
                    <a
                        href="https://www.instagram.com/medinajavierj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 ml-4"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/javiermedinaj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 ml-4"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/javiermedinaj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 ml-4"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

