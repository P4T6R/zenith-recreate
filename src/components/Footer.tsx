
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zenith-gray pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block text-2xl font-bold text-zenith-red tracking-tight">
              ZÉNITH TOPO
            </Link>
            <p className="text-sm text-zenith-darkgray">
              Spécialiste du foncier, du cadastre et du génie civil, ZÉNITH TOPO ET FONCIER accompagne les acteurs publics et privés dans la gestion et la transformation des territoires.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zenith-black">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/presentation" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Présentation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zenith-black">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Bornage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Délimitation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Évaluation Foncière
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Études d'Aménagement
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  Topographie
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zenith-black">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-zenith-red mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-zenith-darkgray">Ouaga 2000, Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-zenith-red mr-2 flex-shrink-0" />
                <a href="tel:+22600000000" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  +226 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-zenith-red mr-2 flex-shrink-0" />
                <a href="mailto:contact@zenith-topo.com" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                  contact@zenith-topo.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-zenith-red mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-zenith-darkgray">Lun - Ven: 08h00 - 18h00</p>
                  <p className="text-sm text-zenith-darkgray">Samedi: 09h00 - 13h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zenith-darkgray">
              &copy; {new Date().getFullYear()} ZÉNITH TOPO ET FONCIER. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/privacy" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-zenith-darkgray hover:text-zenith-red transition-colors">
                    Conditions d'utilisation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
