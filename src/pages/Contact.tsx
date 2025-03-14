
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';

const heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <div className="animate-fade-in">
      <Hero
        title="Contactez-Nous"
        subtitle="PARLONS DE VOTRE PROJET"
        description="Notre équipe d'experts en topographie, foncier et ingénierie est à votre disposition pour vous accompagner dans tous vos projets."
        imageSrc={heroImage}
        height="small"
        primaryButtonText="Nous Écrire"
        primaryButtonLink="#contact-form"
        secondaryButtonText="Voir Nos Bureaux"
        secondaryButtonLink="#map"
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium uppercase tracking-wider bg-zenith-red/10 text-zenith-red rounded-full">
              Nous Sommes à Votre Écoute
            </span>
            <h2 className="section-title-centered section-title-line-center">
              Comment Pouvons-Nous Vous Aider?
            </h2>
            <p className="mt-6 text-zenith-darkgray max-w-3xl mx-auto">
              N'hésitez pas à nous contacter pour toute question ou demande d'information. 
              Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-zenith-red via-zenith-red/50 to-transparent rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-6 text-zenith-black">
                  Nos Coordonnées
                </h3>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start group hover:bg-zenith-gray/30 p-4 rounded-lg transition-all duration-300"
              >
                <div className="bg-zenith-red/10 p-4 rounded-full mr-5 group-hover:bg-zenith-red/20 transition-all duration-300">
                  <MapPin className="text-zenith-red" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zenith-black">Adresse</h3>
                  <p className="text-zenith-darkgray">Ouaga 2000, Rue 15.678</p>
                  <p className="text-zenith-darkgray">Ouagadougou, Burkina Faso</p>
                  <a 
                    href="#map"
                    className="inline-flex items-center mt-1 text-sm font-medium text-zenith-red hover:text-zenith-darkred transition-colors duration-300"
                  >
                    Voir sur la carte
                    <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start group hover:bg-zenith-gray/30 p-4 rounded-lg transition-all duration-300"
              >
                <div className="bg-zenith-red/10 p-4 rounded-full mr-5 group-hover:bg-zenith-red/20 transition-all duration-300">
                  <Phone className="text-zenith-red" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zenith-black">Téléphone</h3>
                  <p className="text-zenith-darkgray">+226 XX XX XX XX</p>
                  <p className="text-zenith-darkgray">+226 XX XX XX XX</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start group hover:bg-zenith-gray/30 p-4 rounded-lg transition-all duration-300"
              >
                <div className="bg-zenith-red/10 p-4 rounded-full mr-5 group-hover:bg-zenith-red/20 transition-all duration-300">
                  <Mail className="text-zenith-red" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zenith-black">Email</h3>
                  <p className="text-zenith-darkgray">contact@zenith-topo.com</p>
                  <p className="text-zenith-darkgray">support@zenith-topo.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start group hover:bg-zenith-gray/30 p-4 rounded-lg transition-all duration-300"
              >
                <div className="bg-zenith-red/10 p-4 rounded-full mr-5 group-hover:bg-zenith-red/20 transition-all duration-300">
                  <Globe className="text-zenith-red" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zenith-black">Site web</h3>
                  <a 
                    href="https://www.zenith-topo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-zenith-darkgray hover:text-zenith-red transition-colors duration-300"
                  >
                    www.zenith-topo.com
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start group hover:bg-zenith-gray/30 p-4 rounded-lg transition-all duration-300"
              >
                <div className="bg-zenith-red/10 p-4 rounded-full mr-5 group-hover:bg-zenith-red/20 transition-all duration-300">
                  <Clock className="text-zenith-red" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zenith-black">Horaires d'ouverture</h3>
                  <ul className="text-zenith-darkgray space-y-1">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span className="font-medium text-zenith-black">08h00 - 18h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi:</span>
                      <span className="font-medium text-zenith-black">09h00 - 13h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche:</span>
                      <span className="font-medium text-zenith-black">Fermé</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
              id="contact-form"
            >
              <div className="relative mb-6">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-zenith-red via-zenith-red/50 to-transparent rounded-full"></div>
                <h2 className="text-2xl font-semibold text-zenith-black">
                  Envoyez-nous un message
                </h2>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-zenith-gray/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium uppercase tracking-wider bg-zenith-red/10 text-zenith-red rounded-full">
              Localisation
            </span>
            <h2 className="section-title-centered">
              Où Nous Trouver
            </h2>
            <p className="mt-4 text-zenith-darkgray max-w-3xl mx-auto">
              Venez nous rencontrer dans nos bureaux à Ouagadougou. Notre équipe sera ravie de vous accueillir et de discuter de vos projets.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <Map />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zenith-red">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Démarrer Votre Projet?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans tous vos projets de topographie, foncier et ingénierie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact-form" 
                className="inline-flex items-center px-6 py-3 rounded-full font-medium text-zenith-red bg-white hover:bg-zenith-gray transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-zenith-red"
              >
                Contactez-Nous Maintenant
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a 
                href="/presentation" 
                className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-zenith-red"
              >
                En Savoir Plus
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
