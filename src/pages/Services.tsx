
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, CheckCircle, Compass, FileText, Building } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1580820267682-426da9922635?q=80&w=2070&auto=format&fit=crop";

const services = [
  {
    title: "Bornage",
    description: "Nous réalisons le bornage, opération qui définit juridiquement et matérialise sur le terrain les limites d'une propriété foncière. Ce service assure une sécurisation juridique et technique pour vos espaces.",
    icon: <MapPin size={24} />,
    link: "/services"
  },
  {
    title: "Délimitation",
    description: "Nous effectuons des délimitations de terrains par le placement de repères matériels. Il peut s'agir de bornes, de piquets, mais aussi d'éléments physiques tels que clôtures ou arbres, selon les besoins spécifiques du terrain.",
    icon: <Compass size={24} />,
    link: "/services"
  },
  {
    title: "Évaluation Foncière",
    description: "Nous proposons des services d'évaluation foncière, permettant de produire des informations précises pour estimer la valeur d'une propriété foncière, essentielles pour les transactions et la gestion patrimoniale.",
    icon: <TrendingUp size={24} />,
    link: "/services"
  },
  {
    title: "Études d'Aménagement",
    description: "Nous réalisons des études techniques complètes à travers la production de supports numériques topographiques ou cartographiques, couvrant l'ensemble des travaux d'aménagement et de construction, afin d'optimiser vos projets.",
    icon: <FileText size={24} />,
    link: "/services"
  },
  {
    title: "Topographie urbaine",
    description: "Nous réalisons des relevés topographiques précis en milieu urbain pour tous types de projets d'aménagement et de construction, en tenant compte des contraintes spécifiques du terrain.",
    icon: <Building size={24} />,
    link: "/services"
  },
  {
    title: "Génie rural",
    description: "Nos équipes interviennent sur les projets d'aménagement rural, assurant une expertise technique pour optimiser l'utilisation des espaces et ressources naturelles.",
    icon: <CheckCircle size={24} />,
    link: "/services"
  }
];

const Services = () => {
  return (
    <div>
      <Hero
        title="Nos Services"
        subtitle="SOLUTIONS PROFESSIONNELLES"
        description="ZÉNITH TOPO ET FONCIER délivre des prestations complètes et spécialisées dans les domaines du foncier, du cadastre et du génie civil."
        imageSrc={heroImage}
        height="small"
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title-centered section-title-line-center">
                Notre Offre de Services
              </h2>
              <p className="mt-6 text-zenith-darkgray max-w-3xl mx-auto">
                ZÉNITH TOPO ET FONCIER se positionne comme un cabinet de Géomètre-Expert combinant de multiples compétences dans tous les segments du génie civil, du génie rural et des aménagements urbains.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-zenith-gray/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title-centered section-title-line-center">
                Notre Savoir-faire
              </h2>
              <p className="mt-6 text-zenith-darkgray max-w-3xl mx-auto">
                Notre expertise s'étend à de nombreux domaines techniques, garantissant une approche complète et intégrée pour tous vos projets.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-zenith-black">Cadastre Urbain et Rural</h3>
              <p className="text-zenith-darkgray">
                Maîtrise des techniques de levé et de gestion des données cadastrales pour une gestion efficace des territoires.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-zenith-black">Topographie</h3>
              <p className="text-zenith-darkgray">
                Réalisation de relevés topographiques précis, indispensables pour tous vos projets d'aménagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-zenith-black">Géomatique</h3>
              <p className="text-zenith-darkgray">
                Intégration de solutions numériques avancées pour la collecte, l'analyse et la visualisation des données géospatiales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-zenith-black">Ingénierie et Maîtrise d'Œuvre</h3>
              <p className="text-zenith-darkgray">
                Accompagnement technique et stratégique dans la conception et la réalisation de projets de génie civil.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-zenith-black">Évaluation Immobilière</h3>
              <p className="text-zenith-darkgray">
                Expertise dans l'estimation de la valeur des biens fonciers pour accompagner vos prises de décision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-zenith-black">BIM</h3>
              <p className="text-zenith-darkgray">
                Utilisation du Building Information Modeling pour une gestion optimisée des projets de construction et d'aménagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-16 bg-zenith-red/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zenith-black mb-6">
                Besoin d'une solution adaptée à votre projet ?
              </h2>
              <p className="text-zenith-darkgray mb-8 max-w-2xl mx-auto">
                Notre équipe d'experts est à votre disposition pour étudier votre projet et vous proposer la meilleure solution technique.
              </p>
              <a href="/contact" className="btn-primary">
                Contactez-nous
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
