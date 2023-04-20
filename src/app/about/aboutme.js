"use client";

import Typewriter from "typewriter-effect";

const Aboutme = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center mt-12">
      <div className="left md:w-1/2 flex flex-col justify-center items-center px-3 my-4">
        <h1 className="text-3xl font-mono">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("About Me!")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{ loop: true }}
          />
        </h1>
        <p className="text-center text-lg font-mono">
          I am an aspiring software developer from a non-CS background
        </p>
      </div>
      <div className="separator bg-gray-200 w-[1px]"></div>
      <div className="right md:w-1/2 flex justify-center items-center">
        <img src="/profile.png" alt="profile" className="w-[50%]" />
      </div>
    </div>
  );
};

export default Aboutme;
