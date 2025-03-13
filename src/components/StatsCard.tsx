
import { motion } from 'framer-motion';

interface StatsCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ number, label, delay = 0 }: StatsCardProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + delay * 0.1 }}
      viewport={{ once: true }}
    >
      <span className="text-4xl font-bold text-zenith-red mb-2">{number}</span>
      <p className="text-zenith-darkgray text-center">{label}</p>
    </motion.div>
  );
};

export default StatsCard;
