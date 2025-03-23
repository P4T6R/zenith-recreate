import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { title: 'Accueil', path: '/' },
  { title: 'Présentation', path: '/presentation' },
  { title: 'Nos Services', path: '/services' },
  { title: 'Nos Projets', path: '/projects' },
  { title: 'Savoir-faire', path: '/expertise' },
  { title: 'Nos Partenaires', path: '/partners' },
  { title: 'Contact', path: '/contact' },
  { title: 'Politique RSE', path: '/rse' },
  { title: 'ACTUALITÉS', path: '/news' },
];

const presentationSubMenu = [
  { title: 'Entreprise', path: '/presentation/company' },
  { title: 'Technologie', path: '/presentation/technology' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-zenith-red tracking-tight transition-opacity duration-300 hover:opacity-80"
            aria-label="ZÉNITH TOPO - Retour à l'accueil"
          >
            ZÉNITH TOPO
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === "/"
                  ? 'text-zenith-red'
                  : 'text-zenith-black hover:text-zenith-red'
              }`}
            >
              Accueil
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-sm font-medium transition-colors duration-300 px-0 bg-transparent ${
                      location.pathname.includes('/presentation')
                        ? 'text-zenith-red'
                        : 'text-zenith-black hover:text-zenith-red'
                    }`}
                  >
                    Présentation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[200px] gap-3 p-4">
                      {presentationSubMenu.map((item) => (
                        <li key={item.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zenith-gray hover:text-zenith-red focus:bg-zenith-gray focus:text-zenith-red"
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {mainNavItems.filter(item => item.title !== 'Accueil').map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-zenith-red'
                    : 'text-zenith-black hover:text-zenith-red'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-zenith-black hover:text-zenith-red transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 glass-effect lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <div className="space-y-3">
            <Link
              to="/"
              className={`block py-3 text-lg font-medium transition-colors duration-300 ${
                location.pathname === "/"
                  ? 'text-zenith-red'
                  : 'text-zenith-black hover:text-zenith-red'
              }`}
            >
              Accueil
            </Link>

            <div className="py-3">
              <div className="flex items-center justify-between text-lg font-medium">
                <span className={`${
                  location.pathname.includes('/presentation')
                    ? 'text-zenith-red'
                    : 'text-zenith-black'
                }`}>
                  Présentation
                </span>
                <ChevronDown size={18} className="ml-1" />
              </div>
              <div className="pl-4 mt-2 space-y-2">
                {presentationSubMenu.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`block py-2 text-base font-medium transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-zenith-red'
                        : 'text-zenith-darkgray hover:text-zenith-red'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {mainNavItems.filter(item => item.title !== 'Accueil').map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`block py-3 text-lg font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-zenith-red'
                    : 'text-zenith-black hover:text-zenith-red'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <div className="space-y-2">
              <p className="text-sm text-zenith-darkgray">Contact</p>
              <a href="tel:+22600000000" className="block text-sm text-zenith-black hover:text-zenith-red transition-colors">
                +226 XX XX XX XX
              </a>
              <a href="mailto:contact@zenith-topo.com" className="block text-sm text-zenith-black hover:text-zenith-red transition-colors">
                contact@zenith-topo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
