import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-cyan animate-pulse" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
      </div>
      
      <p className="absolute mt-32 text-sm text-muted-foreground animate-pulse">
        Loading...
      </p>
    </div>
  );
};
