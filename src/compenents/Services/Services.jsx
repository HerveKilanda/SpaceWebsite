import React from "react";
import { FaReact, FaSpaceShuttle, FaSatellite } from "react-icons/fa"; 
import wave from "../../assets/waveGif.gif"

const ServiceData = [
  {
    titre: "HST",
    content: "300-1500km",
    description:
      "Utilisé pour des observations astronomiques permettant de capturer des images haute définition de l'univers",
    icon: <FaReact className="text-7xl" />,
    aosDelay: 300,
  },
  {
    titre: "ISS",
    content: "500-1500km",
    description:
      "C'est un satellite artificiel habitable en orbite autour de la Terre et sert de laboratoire de recherche sur l'environnement spatial",
    icon: <FaSpaceShuttle className="text-7xl" />, // Remplacez par l'icône appropriée
    aosDelay: 500,
  },
   { titre: "GPS",
    content: "20 200 km",
    description: "Partie du Système de Positionnement Global (GPS) utilisé pour la navigation.",
    icon: <FaSatellite className="text-7xl" />,
    aosDelay: "700",
}
];
const Services = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ServiceData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="bg-space-dark shadow-lg rounded-lg p-6 text-center"
            >
              <div className="flex flex-col items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mt-4">{service.titre}</h3>
              <p className="mt-2">{service.content}</p>
              <p className="mt-2 text-white-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
