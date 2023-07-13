import React from 'react';
import logo from '../assets/medina.png';

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                </a>

                <div className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li>
                            <a
                                href="#about"
                                className="text-gray-900 rounded hover:bg-gray-100 hover:text-blue-300 p-2"
                            >
                                QRGenerator
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
