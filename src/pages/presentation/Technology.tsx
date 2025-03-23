
import React from 'react';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

const Technology = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Notre Technologie"
        subtitle="Expertise Technique"
        description="Découvrez les technologies de pointe utilisées par ZÉNITH TOPO"
        image="/placeholder.svg"
        theme="dark"
        buttons={{
          primary: {
            text: "Voir nos projets",
            link: "/projects"
          }
        }}
      />

      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-zenith-black"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Équipements de Pointe
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-zenith-black/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ZÉNITH TOPO investit continuellement dans les équipements les plus modernes pour garantir des résultats d'une précision inégalée. Notre arsenal technologique comprend des stations totales robotisées, des scanners laser 3D, des drones de cartographie et des systèmes GNSS RTK de dernière génération.
            </motion.p>

            <motion.h2 
              className="text-3xl font-bold mb-6 text-zenith-black mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Solutions Logicielles
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-zenith-black/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Nos experts maîtrisent une gamme complète de logiciels spécialisés pour le traitement des données spatiales, la modélisation 3D, l'analyse SIG et la conception assistée par ordinateur. Cette expertise logicielle nous permet de transformer les données brutes en informations exploitables et en livrables de haute qualité.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-zenith-gray p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-zenith-black">Acquisition de Données</h3>
                <ul className="list-disc pl-5 space-y-2 text-zenith-black/80">
                  <li>Systèmes GNSS multi-constellations</li>
                  <li>Scanners laser terrestres et mobiles</li>
                  <li>Drones photogrammétriques</li>
                  <li>Stations totales robotisées</li>
                  <li>Capteurs LiDAR</li>
                </ul>
              </div>
              <div className="bg-zenith-gray p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-zenith-black">Traitement & Analyse</h3>
                <ul className="list-disc pl-5 space-y-2 text-zenith-black/80">
                  <li>Logiciels SIG avancés</li>
                  <li>Outils de modélisation 3D</li>
                  <li>Solutions de cartographie numérique</li>
                  <li>Logiciels de traitement photogrammétrique</li>
                  <li>Applications d'analyse spatiale</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Technology;
