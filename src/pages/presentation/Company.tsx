
import React from 'react';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

const Company = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Notre Entreprise"
        subtitle="À propos de nous"
        description="Découvrez l'histoire, les valeurs et la vision de ZÉNITH TOPO"
        image="/placeholder.svg"
        theme="light"
        buttons={{
          primary: {
            text: "Contactez-nous",
            link: "/contact"
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
              Notre Histoire
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-zenith-black/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Fondée en 2010, ZÉNITH TOPO s'est rapidement imposée comme leader dans le domaine de la topographie et des services géospatials au Burkina Faso. Notre parcours est marqué par une constante innovation et un engagement sans faille envers l'excellence et la précision.
            </motion.p>

            <motion.h2 
              className="text-3xl font-bold mb-6 text-zenith-black mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Notre Vision
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-zenith-black/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Chez ZÉNITH TOPO, nous aspirons à redéfinir les standards de l'industrie topographique en Afrique de l'Ouest. Notre vision est d'être le partenaire incontournable pour tous les projets nécessitant une expertise géospatiale de premier ordre.
            </motion.p>

            <motion.h2 
              className="text-3xl font-bold mb-6 text-zenith-black mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Nos Valeurs
            </motion.h2>
            <motion.ul 
              className="list-disc pl-5 space-y-3 text-lg text-zenith-black/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <li><strong>Précision</strong> - La rigueur et l'exactitude sont au cœur de nos services.</li>
              <li><strong>Innovation</strong> - Nous adoptons les technologies les plus avancées pour offrir des solutions optimales.</li>
              <li><strong>Intégrité</strong> - Notre éthique professionnelle guide toutes nos interactions.</li>
              <li><strong>Engagement client</strong> - Votre satisfaction est notre priorité absolue.</li>
              <li><strong>Développement durable</strong> - Nous intégrons des pratiques respectueuses de l'environnement.</li>
            </motion.ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Company;
