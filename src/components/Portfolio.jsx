import React from "react";
import restaurantApp from "../assets/portfolio/restaurantApp.png";
import lostFound from "../assets/portfolio/lostFound.png";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
import eventApp from "../assets/portfolio/eventApp.png";
import emergencyApp from "../assets/portfolio/emergencyApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: restaurantApp,
      title:"Restaurant App",
      hrefg: 'https://github.com/Mkdenno/restaurant-app',
      href: 'https://dennorestaurant.netlify.app/'
    },
    {
      id: 2,
      src: lostFound,
      title:"lost&Found App",
      hrefg: 'https://github.com/Mkdenno',
      href: 'https://eliazaragwaya.github.io/Lost_and_found_Recovery_System/'
      
    },
    // {
    //   id: 3,
    //   src: navbar,
    //   title:"Restaurant App",
    //   hrefg: 'https://github.com/Mkdenno/restaurant-app',
    //   href: 'https://dennorestaurant.netlify.app/'
    // },
    // {
    //   id: 4,
    //   src: reactParallax,
    //   title:"Event Application",
    //   hrefg: 'https://github.com/Mkdenno/restaurant-app',
    //   href: 'https://dennorestaurant.netlify.app/'
    // },
    {
      id: 5,
      src: eventApp,
      title:"Lost&Found App",
      hrefg: 'https://github.com/Mkdenno/event-application',
      href: 'https://mkdenno.github.io/event-application/'
    },
    {
      id: 6,
      src: emergencyApp,
      title:"Emergency App",
      hrefg: 'https://github.com/Mkdenno/emergency-app',
      href: 'https://emergencyreportapp.netlify.app/'
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({id, src,href,hrefg,title}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-2xl text-red-600">{title}</p>
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200">
                <a href={href}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200">
                  <a href={hrefg}>Code</a>
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
