import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-500 flex flex-col items-center justify-center text-white p-10 dark:bg-gray-900">
      <div className="text-center">
        <p className="text-lg text-5xl">
          Diseñado y desarrollado por Javier Medina
        </p>

        <div className="pt-20 ">
          <p className="text-lg text-2xl">Follow me</p>

          <div className="flex items-center justify-center pt-10 ">
            <a
              href="https://www.instagram.com/medinajavierj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaInstagram className="w-10 h-20" />
            </a>
          </div>
          <div className="flex items-center justify-center pt-10">
            <a
              href="https://www.linkedin.com/in/javiermedinaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaLinkedin className="w-10 h-20" />
            </a>
          </div>
          <div className="flex items-center justify-center pt-10">
            <a
              href="https://github.com/javiermedinaj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaGithub className="w-10 h-20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
