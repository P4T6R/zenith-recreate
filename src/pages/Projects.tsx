
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop";

const projects = [
  {
    title: "Bornages de Titres Fonciers",
    count: "20 réalisés avec succès",
    imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Fusions de Titres Fonciers",
    count: "10 réalisées avec succès",
    imageSrc: "https://images.unsplash.com/photo-1580820267682-426da9922635?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Morcellements de Titres Fonciers",
    count: "8 réalisés avec succès",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Délimitations de Terrains",
    count: "12 réalisés avec succès",
    imageSrc: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lotissements",
    count: "0 réalisés avec succès",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Études d'Aménagements",
    count: "52 menées avec succès",
    imageSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <div>
      <Hero
        title="Nos Projets"
        subtitle="PROJETS RÉALISÉS"
        description="Les équipes de ZÉNITH TOPO ET FONCIER ont mené avec succès de nombreux projets, alliant précision et innovation dans le domaine du foncier, du cadastre et du génie civil."
        imageSrc={heroImage}
        height="small"
      />

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                count={project.count}
                imageSrc={project.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="section-padding bg-zenith-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Notre Expertise et Nos Références
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                Avec plusieurs années d'expérience au service des collectivités territoriales, des particuliers, des entreprises et des institutions publiques, ZÉNITH TOPO ET FONCIER est un acteur clé dans le domaine du foncier, du cadastre et du génie civil. Nous menons des projets d'envergure qui témoignent de notre savoir-faire et de notre engagement envers nos clients.
              </p>
            </motion.div>

            <div className="bg-white p-8 rounded-lg shadow-sm mt-10">
              <h3 className="text-2xl font-semibold mb-8 text-zenith-black">
                Nos Réalisations en Chiffres
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-zenith-red mr-4">
                    <Briefcase size={24} />
                  </div>
                  <p className="text-zenith-darkgray">
                    <span className="font-medium text-zenith-black">Depuis 2025</span>
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-zenith-red mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-zenith-darkgray">
                    <span className="font-medium text-zenith-black">+500</span> projets d'aménagement et d'ingénierie réalisés
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-zenith-red mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-zenith-darkgray">
                    <span className="font-medium text-zenith-black">+500</span> territoires villageois délimités
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-zenith-red mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-zenith-darkgray">
                    <span className="font-medium text-zenith-black">+300</span> expertises foncières effectuées
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-zenith-red mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-zenith-darkgray">
                    <span className="font-medium text-zenith-black">+15K</span> certificats fonciers délivrés
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-zenith-red mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-zenith-darkgray">
                    <span className="font-medium text-zenith-black">+50K</span> dossiers techniques et certificats de localisation produits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
