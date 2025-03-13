
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
  index?: number;
}

const ServiceCard = ({ title, description, icon, link, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
      viewport={{ once: true }}
    >
      {icon && (
        <div className="mb-4 text-zenith-red">{icon}</div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-zenith-black group-hover:text-zenith-red transition-colors duration-300">
        {title}
      </h3>
      <p className="text-zenith-darkgray mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-sm font-medium text-zenith-red hover:text-zenith-darkred transition-colors duration-300"
      >
        En savoir +
        <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
