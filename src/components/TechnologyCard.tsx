
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface TechnologyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index?: number;
}

const TechnologyCard = ({ title, description, imageSrc, index = 0 }: TechnologyCardProps) => {
  return (
    <motion.div 
      className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-zenith-black">{title}</h3>
        <p className="text-zenith-darkgray mb-4">{description}</p>
        <Link 
          to="/technologies" 
          className="inline-flex items-center text-sm font-medium text-zenith-red hover:text-zenith-darkred transition-colors duration-300"
        >
          En savoir +
          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
