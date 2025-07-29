import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Reset animation state after scroll completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 px-4 py-3 
        bg-gradient-primary text-white rounded-full shadow-elegant hover:shadow-glow
        transition-all duration-500 ease-spring
        hover:scale-110 active:scale-95 hover:animate-magnetic-hover
        animate-slide-up
        ${isAnimating ? 'animate-bounce-subtle' : ''}
        group flex items-center gap-2
      `}
      aria-label="Back to top"
    >
      <ArrowUp 
        className={`
          w-5 h-5 transition-transform duration-500 ease-spring
          ${isAnimating ? 'animate-bounce' : 'group-hover:-translate-y-2 group-hover:animate-wiggle'}
        `} 
      />
      <span className="hidden sm:block text-sm font-medium whitespace-nowrap group-hover:animate-pulse-glow">
        Back to Top
      </span>
    </button>
  );
};