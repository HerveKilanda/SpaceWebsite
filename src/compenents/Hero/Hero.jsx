import React from "react";

const Hero = () => {
  return (
    <div className="text-white relative z-10 flex justify-center items-center h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h1 className="text-5xl font-bold uppercase">Orbite de la terre</h1>
            <p className="text-base mt-4">
              L'orbite de la Terre autour du Soleil est le fondement des cycles
              saisonniers et de la mesure du temps. Cette trajectoire
              elliptique, complétée tous les 365,25 jours, influence non
              seulement notre climat, mais aussi la manière dont nous observons
              les corps célestes. En étudiant l'orbite terrestre, les
              scientifiques peuvent prédire des phénomènes astronomiques tels
              que les éclipses, les transits planétaires et la visibilité des
              constellations. Cette connaissance est cruciale pour la
              planification des missions spatiales et la compréhension des
              effets du Soleil sur notre planète.
            </p>

            <button className="bg-custom-blue text-white rounded-md p-3 mt-3  font-bold">
              Detail de l'article
            </button>
          </div>
          <div>{/* L'espace pour un autre contenu ou pour laisser vide */}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
