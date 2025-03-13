
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { Leaf, Users, BookOpen } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop";

const RSE = () => {
  return (
    <div>
      <Hero
        title="Politique RSE"
        subtitle="RESPONSABILITÉ SOCIÉTALE"
        description="Découvrez notre engagement en matière de responsabilité sociétale des entreprises (RSE) et nos actions concrètes en faveur d'un développement durable."
        imageSrc={heroImage}
        height="small"
      />

      {/* RSE Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Notre Engagement RSE
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                Chez ZÉNITH TOPO ET FONCIER, nous considérons la responsabilité sociétale des entreprises (RSE) comme un pilier fondamental de notre activité. Nous nous engageons à intégrer les préoccupations sociales, environnementales et économiques dans nos opérations quotidiennes et nos interactions avec toutes nos parties prenantes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100"
              >
                <div className="text-center mb-4">
                  <Leaf size={36} className="text-zenith-red mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-zenith-black">Environnement</h3>
                <p className="text-zenith-darkgray text-center">
                  Nous nous efforçons de minimiser notre impact environnemental en adoptant des pratiques durables dans toutes nos activités.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100"
              >
                <div className="text-center mb-4">
                  <Users size={36} className="text-zenith-red mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-zenith-black">Social</h3>
                <p className="text-zenith-darkgray text-center">
                  Nous valorisons nos employés et contribuons au développement des communautés dans lesquelles nous opérons.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100"
              >
                <div className="text-center mb-4">
                  <BookOpen size={36} className="text-zenith-red mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-zenith-black">Formation</h3>
                <p className="text-zenith-darkgray text-center">
                  Nous investissons dans la formation et le développement des compétences pour contribuer à l'essor du secteur du foncier et du génie civil.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="section-padding bg-zenith-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">FORMATION</span>
              <h2 className="section-title">
                Nos Programmes de Formation
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                ZÉNITH TOPO ET FONCIER s'engage à former la prochaine génération de professionnels du foncier, du cadastre et du génie civil. Nos programmes de formation allient théorie et pratique pour garantir l'acquisition de compétences solides et pertinentes.
              </p>
            </motion.div>

            <div className="space-y-8 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-zenith-black">Stages Professionnels</h3>
                <p className="text-zenith-darkgray mb-4">
                  Nous offrons des stages professionnels aux étudiants en topographie, génie civil et disciplines connexes, leur permettant d'acquérir une expérience pratique et de développer leurs compétences dans un environnement professionnel.
                </p>
                <div className="flex justify-end">
                  <span className="text-sm text-zenith-red">Durée : 2 à 6 mois</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-zenith-black">Formations Techniques</h3>
                <p className="text-zenith-darkgray mb-4">
                  Nous organisons régulièrement des formations techniques sur les dernières technologies et méthodologies en matière de topographie, cadastre et génie civil, destinées aux professionnels souhaitant mettre à jour leurs connaissances.
                </p>
                <div className="flex justify-end">
                  <span className="text-sm text-zenith-red">Sessions trimestrielles</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-zenith-black">Partenariats Académiques</h3>
                <p className="text-zenith-darkgray mb-4">
                  Nous collaborons avec des institutions académiques pour développer des programmes de formation adaptés aux besoins du marché et contribuer à l'excellence académique dans nos domaines d'expertise.
                </p>
                <div className="flex justify-end">
                  <span className="text-sm text-zenith-red">Programmes continus</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-zenith-black">Ateliers et Séminaires</h3>
                <p className="text-zenith-darkgray mb-4">
                  Nous organisons des ateliers et séminaires sur des thématiques spécifiques liées au foncier, au cadastre et au génie civil, favorisant le partage de connaissances et le réseautage professionnel.
                </p>
                <div className="flex justify-end">
                  <span className="text-sm text-zenith-red">Événements mensuels</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSE;
