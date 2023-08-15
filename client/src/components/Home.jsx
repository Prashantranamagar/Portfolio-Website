import React from "react";
import HeroImg from "../assets/person.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800" //bg black from top to btm and from top black via black to the gray at last
    >
      <div
        className="text-white max-w-screen-lg mx-auto flex flex-col
      justify-center items-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Back-End Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am a dedicated and passionate Backend Engineer with a strong foundation in developing robust and 
          efficient server-side applications. With a focus on creating seamless and scalable systems, I specialize 
          in architecting and implementing backend solutions that power the digital world.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
             cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="my Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
