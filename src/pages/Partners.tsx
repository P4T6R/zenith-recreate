
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { Users, Building, GraduationCap, Globe } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop";

const partnerCategories = [
  {
    title: "Institutions Publiques",
    icon: <Building size={36} className="text-zenith-red mb-4" />,
    partners: [
      "Ministère de l'Urbanisme et de l'Habitat",
      "Direction Générale des Impôts",
      "Collectivités Territoriales"
    ]
  },
  {
    title: "Entreprises Privées",
    icon: <Users size={36} className="text-zenith-red mb-4" />,
    partners: [
      "Sociétés Immobilières",
      "Entreprises de BTP",
      "Cabinets d'Architecture"
    ]
  },
  {
    title: "Institutions Académiques",
    icon: <GraduationCap size={36} className="text-zenith-red mb-4" />,
    partners: [
      "Universités et Écoles d'Ingénieurs",
      "Centres de Recherche",
      "Instituts de Formation Professionnelle"
    ]
  },
  {
    title: "Organisations Internationales",
    icon: <Globe size={36} className="text-zenith-red mb-4" />,
    partners: [
      "Banque Mondiale",
      "Programme des Nations Unies pour le Développement (PNUD)",
      "Agence Française de Développement (AFD)"
    ]
  }
];

const Partners = () => {
  return (
    <div>
      <Hero
        title="Nos Partenaires"
        subtitle="COLLABORATIONS"
        description="Découvrez les partenaires de ZÉNITH TOPO ET FONCIER, avec qui nous collaborons pour offrir des services de qualité et développer des projets innovants."
        imageSrc={heroImage}
        height="small"
      />

      {/* Partners Section */}
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
                Nos Partenaires Stratégiques
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                ZÉNITH TOPO ET FONCIER a établi des partenariats solides avec diverses organisations et institutions pour garantir l'excellence dans tous nos projets. Ces collaborations nous permettent d'offrir des solutions innovantes et adaptées aux besoins spécifiques de nos clients.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm border border-zinc-100"
              >
                <div className="text-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-zenith-black">{category.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {category.partners.map((partner, partnerIndex) => (
                    <li key={partnerIndex} className="flex items-center p-3 bg-zenith-gray/30 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-zenith-red mr-3"></div>
                      <span className="text-zenith-darkgray">{partner}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-zenith-gray/30 p-8 rounded-lg border border-zinc-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-zenith-black">
                Pourquoi nous choisir comme partenaire ?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-zenith-black mb-2">Expertise Technique</h4>
                  <p className="text-zenith-darkgray">
                    Notre équipe d'experts offre un savoir-faire technique reconnu dans les domaines du foncier, du cadastre et du génie civil.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-zenith-black mb-2">Innovation Constante</h4>
                  <p className="text-zenith-darkgray">
                    Nous investissons continuellement dans les technologies les plus avancées pour offrir des solutions innovantes et efficaces.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-zenith-black mb-2">Engagement Qualité</h4>
                  <p className="text-zenith-darkgray">
                    Nous nous engageons à fournir des prestations de haute qualité, respectant les normes les plus strictes et les délais impartis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
