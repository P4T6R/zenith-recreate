
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact"
        subtitle="CONTACTEZ-NOUS"
        description="Besoin d'une expertise en topographie, foncier ou ingénierie ? Notre équipe est à votre disposition pour vous accompagner dans vos projets !"
        imageSrc={heroImage}
        height="small"
      />

      {/* Contact Section */}
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
                Nous Contacter
              </h2>
              <p className="mt-6 text-zenith-darkgray max-w-3xl mx-auto">
                N'hésitez pas à nous contacter pour toute question ou demande d'information. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-zenith-red/10 p-4 rounded-full mr-5">
                    <MapPin className="text-zenith-red" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zenith-black">Adresse</h3>
                    <p className="text-zenith-darkgray">Ouaga 2000, Ouagadougou, Burkina Faso</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zenith-red/10 p-4 rounded-full mr-5">
                    <Phone className="text-zenith-red" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zenith-black">Téléphone</h3>
                    <p className="text-zenith-darkgray">+226 XX XX XX XX / +226 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zenith-red/10 p-4 rounded-full mr-5">
                    <Mail className="text-zenith-red" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zenith-black">Email</h3>
                    <p className="text-zenith-darkgray">contact@zenith-topo.com / support@zenith-topo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zenith-red/10 p-4 rounded-full mr-5">
                    <Globe className="text-zenith-red" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zenith-black">Site web</h3>
                    <p className="text-zenith-darkgray">www.zenith-topo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zenith-red/10 p-4 rounded-full mr-5">
                    <Clock className="text-zenith-red" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zenith-black">Horaires d'ouverture</h3>
                    <ul className="text-zenith-darkgray">
                      <li>Lundi - Vendredi : 08h00 - 18h00</li>
                      <li>Samedi : 09h00 - 13h00</li>
                      <li>Dimanche : Fermé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-semibold mb-6 text-zenith-black">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-zenith-gray/20">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-zenith-darkgray">Carte interactive à intégrer ici</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
