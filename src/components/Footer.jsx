import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black flex flex-col items-center justify-center text-white p-10 dark:bg-black dark:text-white">
      <div className="text-center">
        <p className="text-lg text-5xl">
          Diseñado y desarrollado por Javier Medina
        </p>

        <div className="pt-20">
          <p className="text-lg text-2xl">Follow me</p>

          <div className="flex items-center justify-center pt-10 space-x-4">
            <a
              href="https://www.instagram.com/medinajavierj/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 mx-2"
            >
              <FaInstagram className="w-10 h-20" />
            </a>
            <a
              href="https://www.linkedin.com/in/javiermedinaj/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 mx-2"
            >
              <FaLinkedin className="w-10 h-20" />
            </a>
            <a
              href="https://github.com/javiermedinaj"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 mx-2"
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
