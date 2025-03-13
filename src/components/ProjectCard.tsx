
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  count: string;
  imageSrc: string;
  index?: number;
}

const ProjectCard = ({ title, count, imageSrc, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <div 
        className="aspect-w-16 aspect-h-9 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zenith-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <p className="text-white/80 text-sm mb-1">{count}</p>
          <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
          <Link 
            to="/projects" 
            className="inline-block text-sm font-medium text-white opacity-0 transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-zenith-red/90 hover:bg-zenith-red rounded-full px-4 py-1"
          >
            En savoir + sur nos projets
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
