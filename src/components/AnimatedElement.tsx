
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-up' | 'reveal' | 'elastic' | 'bounce-subtle' | 'stagger';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  interactive?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  className = '',
  triggerOnce = true,
  interactive = false,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce });

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'fade-in-up':
        return 'animate-fade-in-up';
      case 'fade-in-left':
        return 'animate-slide-in-left';
      case 'fade-in-right':
        return 'animate-slide-in-right';
      case 'scale-in':
        return 'animate-scale-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'reveal':
        return 'animate-reveal';
      case 'elastic':
        return 'animate-elastic';
      case 'bounce-subtle':
        return 'animate-bounce-subtle';
      case 'stagger':
        return 'animate-stagger';
      default:
        return 'animate-fade-in-up';
    }
  };

  const interactiveClasses = interactive ? 
    'hover:animate-magnetic-hover hover:shadow-glow transition-all duration-300 cursor-pointer group' : 
    '';

  return (
    <div
      ref={elementRef}
      className={`
        transition-all ease-spring
        ${getAnimationClass()} 
        ${interactiveClasses}
        ${className}
      `}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};
