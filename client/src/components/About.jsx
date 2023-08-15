import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
                from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
                 justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          praesentium totam quam dolores, quas excepturi necessitatibus
          possimus, odit itaque inventore accusantium perspiciatis? Provident
          nemo, ut ratione praesentium in optio asperiores!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          necessitatibus eligendi, ab sit qui quia at et eius blanditiis a
          doloribus mollitia adipisci voluptates alias ad, nesciunt minima porro
          ipsum!
        </p>
      </div>
    </div>
  );
};

export default About;
