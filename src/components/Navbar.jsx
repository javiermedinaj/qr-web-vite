import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="bg-gray-200 text-white p-4 flex justify-end dark:text-gray-300 dark:bg-black">
      <button
        className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
        onClick={handleChangeTheme}
      >
        {theme === "light" ? <RiMoonLine className="w-5 h-5" /> : <RiSunLine className="w-5 h-5" />}
        {theme === "light" ? "" : ""}
      </button>
    </nav>
  );
};

export default Navbar;
