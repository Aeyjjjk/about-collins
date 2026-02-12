import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const animationClasses = {
    'fade-up': 'translate-y-12 opacity-0',
    'fade-down': '-translate-y-12 opacity-0',
    'fade-left': '-translate-x-12 opacity-0',
    'fade-right': 'translate-x-12 opacity-0',
    'scale': 'scale-95 opacity-0',
    'fade': 'opacity-0',
  };

  const visibleClasses = 'translate-y-0 translate-x-0 scale-100 opacity-100';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
