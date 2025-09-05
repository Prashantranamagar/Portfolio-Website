import React from "react";
import ems from "../assets/portfolio/EMS.jpeg";
import ecommerce from "../assets/portfolio/ecommerce.png";
import newssite from "../assets/portfolio/NewsSite.png";
import ams from "../assets/portfolio/ams.jpeg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: newssite,
      demo: "https://prashantranamagar.pythonanywhere.com",
      code: "https://github.com/username/newssite",
    },
    {
      id: 2,
      src: ems,
      demo: "https://ems-demo.com",
      code: "https://github.com/username/ems",
    },
    {
      id: 3,
      src: ecommerce,
      demo: "https://ecommerce-demo.com",
      code: "https://github.com/username/ecommerce",
    },
    {
      id: 4,
      src: ams,
      demo: "https://ams-demo.com",
      code: "https://github.com/username/ams",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(demo, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
