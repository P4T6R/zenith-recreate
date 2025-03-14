
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  overlay?: boolean;
  height?: 'normal' | 'large' | 'small';
}

const Hero = ({
  title,
  subtitle,
  description,
  imageSrc,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  overlay = true,
  height = 'normal',
}: HeroProps) => {
  const heightClass = {
    normal: 'min-h-[70vh]',
    large: 'min-h-[90vh]',
    small: 'min-h-[50vh]',
  }[height];

  return (
    <section 
      className={`relative flex items-center ${heightClass} w-full overflow-hidden`}
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {overlay && (
        <motion.div 
          className="absolute inset-0 bg-zenith-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      {/* Animated diagonal lines overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)',
               backgroundSize: '20px 20px'
            }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium uppercase tracking-wider bg-zenith-red/90 text-white rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.span>
          )}
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {primaryButtonText && primaryButtonLink && (
              <Link 
                to={primaryButtonLink.startsWith('http') ? '' : primaryButtonLink} 
                href={primaryButtonLink.startsWith('http') ? primaryButtonLink : undefined}
                className="relative btn-primary group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {primaryButtonText}
                  <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-zenith-darkred transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                to={secondaryButtonLink.startsWith('http') ? '' : secondaryButtonLink}
                href={secondaryButtonLink.startsWith('http') ? secondaryButtonLink : undefined}
                className="relative overflow-hidden inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-transparent border border-white/30 group hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              >
                <span className="relative z-10">{secondaryButtonText}</span>
                <span className="absolute inset-0 z-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator for large heroes */}
      {height !== 'small' && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                y: [0, 16, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
