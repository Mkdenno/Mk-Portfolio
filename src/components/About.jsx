import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am very interested with anything to do with technology , went into
          programming to learn more about Web applications and android
          applications.
        </p>
        <br />
        <p className="text-xl">
          The urge to learn more drives me to do researchs with an aim of
          learning, improving and solving problems faced in the community that
          can be handled with improved technology Willing to cooperate with
          anyone or any institution that will help me grow and perfect my skills
          more
        </p>
      </div>
    </div>
  );
};

export default About;
