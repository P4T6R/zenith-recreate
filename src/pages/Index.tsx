
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TechnologyCard from '@/components/TechnologyCard';
import StatsCard from '@/components/StatsCard';
import { ChevronRight, MapPin, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImage = "https://images.unsplash.com/photo-1540845692348-b9d2bc813a63?q=80&w=2070&auto=format&fit=crop";

const services = [
  {
    title: "Bornage",
    description: "Nous réalisons le bornage, opération qui définit juridiquement et matérialise sur le terrain les limites d'une propriété foncière.",
    icon: <MapPin size={24} />,
    link: "/services"
  },
  {
    title: "Délimitation",
    description: "Nous effectuons des délimitations de terrains par le placement de repères matériels selon les besoins spécifiques du terrain.",
    icon: <MapPin size={24} />,
    link: "/services"
  },
  {
    title: "Évaluation Foncière",
    description: "Nous proposons des services d'évaluation foncière, permettant de produire des informations précises pour estimer la valeur d'une propriété.",
    icon: <TrendingUp size={24} />,
    link: "/services"
  },
  {
    title: "Études d'Aménagement",
    description: "Nous réalisons des études techniques complètes à travers la production de supports numériques topographiques ou cartographiques.",
    icon: <CheckCircle size={24} />,
    link: "/services"
  }
];

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
  }
];

const technologies = [
  {
    title: "Drones de Cartographie et d'Inspection",
    description: "ZÉNITH TOPO ET FONCIER exploite les technologies les plus avancées en matière de drones pour la topographie, le BTP et l'inspection d'ouvrages.",
    imageSrc: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Systèmes GPS GNSS de Haute Précision",
    description: "Pour garantir une précision optimale, nous utilisons les systèmes GPS GNSS Trimble R10 pour une acquisition rapide et fiable des données.",
    imageSrc: "https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Stations Totales de Nouvelle Génération",
    description: "Nos stations totales, comme la Leica TS06+, offrent une précision exceptionnelle pour la mesure et l'implantation de points sur le terrain.",
    imageSrc: "https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop"
  }
];

const stats = [
  { number: "+150", label: "Collaborateurs" },
  { number: "+500", label: "Clients Satisfaits" },
  { number: "+5", label: "Projets Structurants" }
];

const Index = () => {
  return (
    <div>
      <Hero
        title="L'Excellence au Service du Territoire"
        subtitle="ZÉNITH TOPO ET FONCIER"
        description="Spécialiste du foncier, du cadastre et du génie civil, nous accompagnons les acteurs publics et privés dans la gestion et la transformation des territoires."
        imageSrc={heroImage}
        primaryButtonText="Nos Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contactez-nous"
        secondaryButtonLink="/contact"
        height="large"
      />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="section-subtitle">À PROPOS DE NOUS</span>
                <h2 className="section-title">ZÉNITH TOPO ET FONCIER</h2>
                <p className="mb-6 text-zenith-darkgray">
                  Spécialiste du foncier, du cadastre et du génie civil, ZÉNITH TOPO ET FONCIER accompagne les acteurs publics et privés dans la gestion et la transformation des territoires. Grâce à une combinaison de technologies de pointe (drones, scanners, etc.) et d'un savoir-faire éprouvé, nous offrons des solutions précises et adaptées aux enjeux de développement urbain et rural.
                </p>
                <Link to="/presentation" className="btn-primary">
                  En savoir plus
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-zenith-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">NOS SERVICES</span>
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Services Professionnels
              </h2>
              <p className="text-zenith-darkgray mt-6">
                ZÉNITH TOPO ET FONCIER délivre des prestations complètes et spécialisées dans les domaines du foncier, du cadastre et du génie civil.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="mt-10 text-center">
            <Link to="/services" className="btn-secondary">
              Voir tous nos services
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="p-8 rounded-lg bg-white shadow-sm border border-zinc-100 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-zenith-black">Notre Vision</h3>
              <p className="text-zenith-darkgray">
                Faire de ZÉNITH TOPO ET FONCIER un cabinet de référence, regroupant des experts reconnus dans le foncier, le cadastre et l'ingénierie, afin de contribuer à l'essor durable des territoires urbains et ruraux.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-lg bg-white shadow-sm border border-zinc-100 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-zenith-black">Notre Mission</h3>
              <p className="text-zenith-darkgray">
                Proposer des prestations techniques de haute qualité pour relever les défis liés à l'aménagement et à la transformation des territoires, en garantissant précision, fiabilité et respect des normes en vigueur.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-lg bg-white shadow-sm border border-zinc-100 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-zenith-black">Notre Ambition</h3>
              <p className="text-zenith-darkgray">
                Générer de la croissance et de l'impact en mettant notre expertise au service du foncier rural, du cadastre et du génie civil, pour accompagner un développement responsable et durable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-zenith-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">NOTRE ÉQUIPE</span>
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Une Équipe Jeune et Dynamique
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-zenith-darkgray">
                Au sein de ZÉNITH TOPO ET FONCIER, nous disposons d'une équipe composée de jeunes talents et d'experts chevronnés, alliant professionnalisme et expertise pour exécuter vos travaux dans les délais impartis et avec un souci constant de la qualité.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="text-zenith-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-zenith-black">Une Équipe d'Experts</h4>
                    <p className="text-zenith-darkgray">
                      Nous réunissons des spécialistes du foncier, du cadastre et du génie civil, capables de gérer toutes les étapes de vos projets.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="text-zenith-red mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-zenith-black">Des Outils de Pointe</h4>
                    <p className="text-zenith-darkgray">
                      Pour mener à bien nos missions, nous utilisons des technologies de dernière génération (drones, scanners 3D, systèmes SIG, etc.), garantissant précision et fiabilité.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Notre équipe" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">NOS PROJETS</span>
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Projets Réalisés
              </h2>
              <p className="text-zenith-darkgray mt-6">
                Les équipes de ZÉNITH TOPO ET FONCIER ont mené avec succès de nombreux projets, alliant précision et innovation dans le domaine du foncier, du cadastre et du génie civil.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-primary">
              Voir tous nos projets
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-zenith-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">NOS TECHNOLOGIES</span>
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Technologies de Pointe
              </h2>
              <p className="text-zenith-darkgray mt-6">
                ZÉNITH TOPO ET FONCIER utilise les dernières technologies pour garantir des résultats précis et fiables dans tous nos projets.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={index}
                title={tech.title}
                description={tech.description}
                imageSrc={tech.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à Concrétiser Votre Projet ?
              </h2>
              <p className="text-white/90 mb-8">
                Notre équipe d'experts est à votre disposition pour vous accompagner dans la réalisation de vos projets. Contactez-nous dès aujourd'hui pour en discuter !
              </p>
              <Link to="/contact" className="btn-primary">
                Contactez-nous
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
