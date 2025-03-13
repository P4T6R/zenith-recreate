
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import StatsCard from '@/components/StatsCard';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop";

const stats = [
  { number: "+150", label: "Collaborateurs" },
  { number: "+500", label: "Clients Satisfaits" },
  { number: "+5", label: "Projets Structurants" }
];

const Presentation = () => {
  return (
    <div>
      <Hero
        title="Présentation"
        subtitle="À PROPOS DE NOUS"
        description="Découvrez ZÉNITH TOPO ET FONCIER, cabinet de référence dans le domaine du foncier, du cadastre et du génie civil."
        imageSrc={heroImage}
        height="small"
      />

      {/* L'entreprise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">L'ENTREPRISE</span>
              <h2 className="section-title">
                ZÉNITH TOPO ET FONCIER : L'Excellence au Service du Territoire
              </h2>
              <p className="mb-6 text-zenith-darkgray">
                Spécialiste du foncier, du cadastre et du génie civil, ZÉNITH TOPO ET FONCIER accompagne les acteurs publics et privés dans la gestion et la transformation des territoires. Grâce à une combinaison de technologies de pointe (drones, scanners, etc.) et d'un savoir-faire éprouvé, nous offrons des solutions précises et adaptées aux enjeux de développement urbain et rural. Notre engagement : garantir des services innovants et performants pour une gestion optimale des espaces et infrastructures.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-zinc-200 my-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-zenith-black">Notre Vision</h3>
              <p className="text-zenith-darkgray">
                Faire de ZÉNITH TOPO ET FONCIER un cabinet de référence, regroupant des experts reconnus dans le foncier, le cadastre et l'ingénierie, afin de contribuer à l'essor durable des territoires urbains et ruraux.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-zenith-black">Notre Mission</h3>
              <p className="text-zenith-darkgray">
                Proposer des prestations techniques de haute qualité pour relever les défis liés à l'aménagement et à la transformation des territoires, en garantissant précision, fiabilité et respect des normes en vigueur.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-zenith-black">Notre Ambition</h3>
              <p className="text-zenith-darkgray">
                Générer de la croissance et de l'impact en mettant notre expertise au service du foncier rural, du cadastre et du génie civil, pour accompagner un développement responsable et durable.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-zinc-200 my-12"></div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-zenith-black">
                ZÉNITH TOPO ET FONCIER EN CHIFFRES
              </h3>
              <p className="mb-8 text-zenith-darkgray">
                Des chiffres clés, preuve de notre engagement et de notre expérience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Team Section */}
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
                Une Équipe Jeune et Dynamique
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                Au sein de ZÉNITH TOPO ET FONCIER, nous disposons d'une équipe composée de jeunes talents et d'experts chevronnés, alliant professionnalisme et expertise pour exécuter vos travaux dans les délais impartis et avec un souci constant de la qualité.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Notre équipe" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Métier Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">LE MÉTIER</span>
              <h2 className="section-title">
                Le Géomètre-Expert, c'est celui qui mesure la Terre
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                Cette définition, simple en apparence, traduit pourtant l'essence d'un métier exigeant et polyvalent. Le géomètre-expert est à la fois un mathématicien et un spécialiste de la géométrie, capable de comprendre et de représenter les relations entre points, droites, courbes, surfaces et volumes. Son expertise est essentielle pour la conception, l'exécution et la gestion des aménagements urbains et ruraux.
              </p>
            </motion.div>

            <div className="border-t border-zinc-200 my-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-zenith-black">
                  Nos Missions et Fonctions
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-zenith-black mb-2">Mesurer et Délimiter</h4>
                    <ul className="space-y-2">
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          <span className="font-medium text-zenith-black">Relevés de Terrain :</span> À l'aide d'appareils spécialisés (comme le théodolite), le géomètre-expert réalise des relevés minutieux en n'omettant aucun détail.
                        </p>
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          <span className="font-medium text-zenith-black">Délimitation et Bornage :</span> Il fixe juridiquement et matérialise sur le terrain les limites exactes des propriétés foncières, garantissant ainsi une sécurité juridique pour toutes les parties.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-zenith-black mb-2">Concevoir et Planifier</h4>
                    <ul className="space-y-2">
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          <span className="font-medium text-zenith-black">Conception des Aménagements :</span> À partir des plans, il imagine et prépare les travaux d'aménagement – remembrement, assèchement des sols, tracé de routes, définition de quartiers, etc.
                        </p>
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          <span className="font-medium text-zenith-black">Fonction Juridique :</span> Il établit la superficie d'un bien lors de transactions, prépare les règlements de copropriété et collabore à l'élaboration de plans d'occupation des sols, assurant ainsi une gestion optimale du territoire.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-zenith-black">
                  Obligations et Responsabilités
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-zenith-black mb-2">Obligations du Géomètre-Expert :</h4>
                    <ul className="space-y-2">
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          Communiquer gratuitement aux services publics.
                        </p>
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          Assurer un devoir de conseil auprès des clients.
                        </p>
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          Exercer sa mission avec impartialité et indépendance.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-zenith-black mb-2">Responsabilités :</h4>
                    <ul className="space-y-2">
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          Le géomètre-expert est responsable des travaux qu'il réalise, ainsi que de ceux effectués par ses collaborateurs.
                        </p>
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-zenith-darkgray">
                          Il doit souscrire à une Assurance Responsabilité Professionnelle pour garantir la qualité et la sécurité de ses interventions.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-zinc-200 my-10"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-zenith-black">
                Exercice de la Profession au Burkina Faso
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zenith-black mb-2">Conditions d'Exercice :</h4>
                  <p className="text-zenith-darkgray mb-4">
                    Conformément aux réglementations en vigueur (notamment le décret n°2012-446/PRES/PM/MHU/MEF et la loi n°021-2010/AN), l'exercice de la profession est soumis à des conditions strictes :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-zenith-darkgray">
                        <span className="font-medium text-zenith-black">Diplômes et Stages :</span> Seuls les candidats titulaires d'un diplôme d'ingénieur Géomètre ou d'ingénieur Topographe, accompagnés d'un stage validé (18 mois en cabinet ou 3 ans d'expérience dans le domaine), peuvent prétendre à cette fonction.
                      </p>
                    </li>
                    <li className="flex">
                      <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-zenith-darkgray">
                        <span className="font-medium text-zenith-black">Inscription à l'Ordre :</span> Les professionnels doivent être inscrits au tableau A de l'Ordre des Géomètres-Experts après validation par le Conseil National de l'Ordre et prêtent serment, s'engageant à exercer leur mission avec conscience et probité.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-zenith-black mb-2">Organisation Professionnelle :</h4>
                  <p className="text-zenith-darkgray">
                    Les géomètres-experts du Burkina Faso sont regroupés au sein d'un Ordre chargé de veiller au respect des textes de loi et aux normes professionnelles. Ce cadre réglementaire garantit la qualité, la transparence et la rigueur de l'exercice de la profession.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="border-t border-zinc-200 my-10"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-zenith-black">
                Notre Engagement chez ZÉNITH TOPO ET FONCIER
              </h3>
              <p className="text-zenith-darkgray mb-4">
                Chez ZÉNITH TOPO ET FONCIER, nous combinons tradition et innovation pour offrir des prestations de haute qualité dans le domaine du foncier, du cadastre et du génie civil. Nous nous engageons à :
              </p>
              <ul className="space-y-2">
                <li className="flex">
                  <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-zenith-darkgray">
                    Mesurer avec précision, concevoir avec rigueur et garantir une gestion optimale des territoires.
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-zenith-darkgray">
                    Respecter scrupuleusement les obligations et responsabilités liées à notre métier.
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-zenith-red mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-zenith-darkgray">
                    Contribuer au développement urbain et rural de manière éthique et responsable.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-zenith-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">TECHNOLOGIE</span>
              <h2 className="section-title">
                Nos Outils Technologiques
              </h2>
            </motion.div>

            <div className="space-y-10 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-zenith-black">
                    Drones de Cartographie et d'Inspection
                  </h3>
                  <p className="text-zenith-darkgray mb-4">
                    ZÉNITH TOPO ET FONCIER exploite les technologies les plus avancées en matière de drones pour la topographie, le BTP et l'inspection d'ouvrages. Grâce à nos drones de haute précision, nous réalisons des relevés tridimensionnels détaillés, permettant une meilleure gestion des projets et une optimisation des coûts.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Drones de Cartographie" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=2070&auto=format&fit=crop" 
                    alt="Systèmes GPS GNSS" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-semibold mb-4 text-zenith-black">
                    Systèmes GPS GNSS de Haute Précision
                  </h3>
                  <p className="text-zenith-darkgray mb-4">
                    Pour garantir une précision optimale, nous utilisons les systèmes GPS GNSS Trimble R10. Ces équipements permettent une acquisition rapide et fiable des données sur tous types de terrains, assurant ainsi une exactitude maximale dans nos levés topographiques.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-zenith-black">
                    Stations Totales de Nouvelle Génération
                  </h3>
                  <p className="text-zenith-darkgray mb-4">
                    Nos stations totales, comme la Leica TS06+, offrent une précision exceptionnelle pour la mesure et l'implantation de points sur le terrain. Elles sont équipées de claviers alphanumériques intuitifs et d'une connectivité avancée pour une utilisation simplifiée et efficace.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop" 
                    alt="Stations Totales" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Solutions SIG Mobiles" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-semibold mb-4 text-zenith-black">
                    Solutions SIG Mobiles
                  </h3>
                  <p className="text-zenith-darkgray mb-4">
                    Nous utilisons des récepteurs GPS professionnels, tels que le Spectra MobileMapper 50, qui allient la robustesse et la performance d'un équipement de géolocalisation à la flexibilité d'un smartphone. Ces outils permettent une collecte de données fiable et en temps réel pour des applications variées en foncier et en génie civil.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
