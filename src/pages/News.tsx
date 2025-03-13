
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { CalendarDays, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";

const newsArticles = [
  {
    title: "Lancement du programme national de sécurisation foncière",
    date: "15 mai 2023",
    excerpt: "Le ministère de l'Urbanisme et du Territoire du Burkina Faso a annoncé le lancement d'un programme national de sécurisation foncière, visant à renforcer les droits fonciers et à réduire les conflits liés à la terre.",
    imageSrc: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop",
    category: "Politique Foncière"
  },
  {
    title: "Réforme du cadastre urbain à Ouagadougou",
    date: "28 mars 2023",
    excerpt: "La ville de Ouagadougou engage une réforme majeure de son cadastre urbain, avec l'objectif de moderniser la gestion des données foncières et d'améliorer la planification urbaine.",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    category: "Cadastre"
  },
  {
    title: "Nouveau projet d'aménagement urbain dans la ville de Bobo-Dioulasso",
    date: "10 février 2023",
    excerpt: "Un ambitieux projet d'aménagement urbain a été lancé à Bobo-Dioulasso, incluant la création de nouvelles infrastructures et la réhabilitation de quartiers existants.",
    imageSrc: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop",
    category: "Aménagement Urbain"
  },
  {
    title: "Conférence internationale sur la gestion durable des terres",
    date: "5 janvier 2023",
    excerpt: "Ouagadougou accueillera en juin prochain une conférence internationale sur la gestion durable des terres, réunissant des experts et des décideurs de toute l'Afrique de l'Ouest.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Événement"
  }
];

const News = () => {
  return (
    <div>
      <Hero
        title="Actualités"
        subtitle="DERNIÈRES NOUVELLES"
        description="Restez informé des dernières nouvelles et évolutions dans le domaine du foncier, du cadastre et du génie civil au Burkina Faso."
        imageSrc={heroImage}
        height="small"
      />

      {/* News Section */}
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
                Actualités du Secteur
              </h2>
              <p className="mb-8 text-zenith-darkgray">
                Découvrez les dernières actualités du ministère de l'Urbanisme et du Territoire du Burkina Faso, ainsi que les évolutions dans le domaine du foncier, du cadastre et du génie civil.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-zinc-100 group"
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                  <img 
                    src={article.imageSrc} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-zenith-red text-white px-3 py-1 text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-zenith-darkgray">
                    <CalendarDays size={16} className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-zenith-black group-hover:text-zenith-red transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-zenith-darkgray mb-4">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-sm font-medium text-zenith-red hover:text-zenith-darkred transition-colors duration-300"
                  >
                    Lire la suite
                    <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="#" 
              className="btn-primary"
            >
              Voir toutes les actualités
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
