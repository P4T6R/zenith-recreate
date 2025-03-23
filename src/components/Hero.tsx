
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  overlay?: boolean;
  buttons?: {
    primary?: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
  };
  position?: 'center' | 'left';
  theme?: 'light' | 'dark';
  fullHeight?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  image = '/placeholder.svg',
  overlay = true,
  buttons,
  position = 'center',
  theme = 'light',
  fullHeight = true,
}: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Parallax effect for text elements
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const descriptionY = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);

  useEffect(() => {
    // Add any additional initialization if needed
  }, []);

  const textAlignment = position === 'center' ? 'text-center mx-auto' : 'text-left';
  const textColor = theme === 'light' ? 'text-zenith-black' : 'text-white';
  const containerClass = fullHeight ? 'min-h-screen' : 'min-h-[60vh]';

  return (
    <div 
      ref={heroRef}
      className={`relative w-full flex items-center justify-center overflow-hidden ${containerClass}`}
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${image})` }}
        />
        {overlay && (
          <div className={`absolute inset-0 bg-black/30 ${theme === 'dark' ? 'bg-opacity-50' : 'bg-opacity-20'}`} />
        )}
      </motion.div>

      {/* Content */}
      <div className="container px-4 md:px-6 z-10 py-12">
        <div className={`max-w-3xl ${textAlignment}`}>
          {subtitle && (
            <motion.div 
              style={{ y: subtitleY }}
              className="mb-4"
            >
              <span className={`inline-block font-semibold text-sm md:text-base uppercase tracking-wide ${theme === 'light' ? 'text-zenith-red' : 'text-zenith-red'}`}>
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1 
            style={{ y: titleY }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${textColor} animate-fade-in`}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p 
              style={{ y: descriptionY }}
              className={`text-base md:text-lg mb-8 ${theme === 'light' ? 'text-zenith-black/80' : 'text-white/90'} max-w-2xl ${position === 'center' ? 'mx-auto' : ''} animate-fade-in animation-delay-200`}
            >
              {description}
            </motion.p>
          )}

          {buttons && (
            <motion.div 
              className={`flex flex-wrap gap-4 mt-8 ${position === 'center' ? 'justify-center' : 'justify-start'} animate-fade-in animation-delay-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {buttons.primary && (
                <Link
                  to={buttons.primary.link}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all bg-zenith-red hover:bg-zenith-darkred rounded-md shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0 animate-pulse-ring"
                >
                  {buttons.primary.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}

              {buttons.secondary && (
                <Link
                  to={buttons.secondary.link}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all bg-white/90 text-zenith-black hover:bg-white border border-gray-200 rounded-md hover:shadow-md transform hover:-translate-y-1 active:translate-y-0"
                >
                  {buttons.secondary.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
