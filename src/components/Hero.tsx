
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className={`relative flex items-center ${heightClass} w-full`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-zenith-black/50"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {subtitle && (
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium uppercase tracking-wider bg-zenith-red/90 text-white rounded">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              {description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Link 
                to={primaryButtonLink} 
                className="btn-primary"
              >
                {primaryButtonText}
                <ChevronRight size={18} className="ml-1" />
              </Link>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                to={secondaryButtonLink} 
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
