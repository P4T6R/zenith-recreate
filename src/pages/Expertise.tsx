
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1580820267682-426da9922635?q=80&w=2070&auto=format&fit=crop";

const expertiseAreas = [
  {
    title: "Photogrammétrie et Lidar",
    description: "Notre expertise en photogrammétrie et en technologie Lidar nous permet de créer des modèles 3D précis et détaillés, essentiels pour la planification urbaine et la cartographie.",
    imageSrc: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Topographie et géodésie",
    description: "Nos équipes maîtrisent parfaitement les techniques de topographie et de géodésie pour garantir des mesures précises et fiables sur tous types de terrains.",
    imageSrc: "https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cadastre et foncier",
    description: "Notre expertise en cadastre et foncier permet une gestion optimale des propriétés et des territoires, essentielle pour sécuriser les droits fonciers.",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Aménagement Urbain et VRD",
    description: "Nous concevons et mettons en œuvre des projets d'aménagement urbain et de Voirie et Réseaux Divers (VRD) adaptés aux besoins spécifiques de chaque territoire.",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Géomatique et Cartographie",
    description: "Notre savoir-faire en géomatique et cartographie nous permet de produire des cartes et des visualisations de données géospatiales de haute qualité.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "BIM",
    description: "Notre expertise en Building Information Modeling (BIM) permet une gestion intégrée et optimisée des projets de construction, du concept à la réalisation.",
    imageSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  }
];

const Expertise = () => {
  return (
    <div>
      <Hero
        title="Notre Savoir-faire"
        subtitle="EXPERTISE"
        description="Découvrez nos différents domaines d'expertise, où innovation et précision se rencontrent pour offrir des solutions adaptées à vos besoins."
        imageSrc={heroImage}
        height="small"
      />

      {/* Expertise Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Nos Domaines d'Expertise
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                ZÉNITH TOPO ET FONCIER dispose d'une expertise pointue dans de nombreux domaines, garantissant des prestations de haute qualité pour tous vos projets.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-2xl font-semibold mb-4 text-zenith-black">{area.title}</h3>
                  <p className="text-zenith-darkgray mb-6">{area.description}</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-zenith-darkgray">
                        Utilisation des technologies les plus avancées
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-zenith-darkgray">
                        Équipe d'experts qualifiés et expérimentés
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-zenith-darkgray">
                        Solutions personnalisées selon vos besoins spécifiques
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <img 
                    src={area.imageSrc} 
                    alt={area.title} 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
