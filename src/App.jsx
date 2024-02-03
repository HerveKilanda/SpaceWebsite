import React, { useEffect } from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./compenents/Navbar/Navbar.jsx";
import Hero from "./compenents/Hero/Hero.jsx";
import Services from "./compenents/Services/Services.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // pour que les animations ne se déclenchent qu'une seule fois
    });
  }, []);

  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};
export default App;
