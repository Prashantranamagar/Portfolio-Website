import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const nav_links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div
      className="flex justify-between items-center
     w-full h-20 p-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="font-signature text-5xl ml-2">Prashant Rana Magar</h1>
      </div>
      <ul className="hidden md:flex">
        {nav_links.map(({ id, link }) => (
          //destructing....oi.e id & link
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* mobile view */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center
absolute top-0 left-0 w-full h-screen bg-gradient-to-b
from-black to-gray-800 text-gray-500"
        >
          {nav_links.map(({ id, link }) => (
            <ul>
              <li
                key={id}
                className="py-6 px-4 text-4xl cursor-pointer capitalize"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
