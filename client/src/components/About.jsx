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

        <p className="text-xl mt ">
        Greetings! I'm Prashant Rana Magar, a backend developer with a profound expertise in Python. 
        My passion lies in creating efficient and effective digital solutions that drive innovation. 
        I'm particularly intrigued by the applications of Python in automation and fintech.
        </p>
        <br />

        <p className="text-xl">
        With a keen focus on backend development, I specialize in leveraging Python's capabilities to build seamless systems. 
        Whether it's optimizing databases for lightning-fast data retrieval or architecting APIs that facilitate flawless communication, 
        I'm dedicated to crafting solutions that empower technology.
        </p>
        <br />

        <p className="text-xl">
        Despite being relatively new to the professional sphere, I'm fueled by an unwavering curiosity and commitment 
        to mastering my craft. My journey started with Python and has led me to the exciting convergence of technology 
        and finance. If you're searching for a backend developer who thrives on challenges and seeks to contribute to 
        automation and fintech ventures, let's connect.
        </p>
        <br />
     
        
      </div>
    </div>
  );
};

export default About;
