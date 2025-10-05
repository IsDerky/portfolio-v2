// components/providers/AnimationProvider.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  pageLoaded: boolean;
  triggerPageLoad: () => void;
  getDelay: (baseDelay: number) => number;
  isAnimating: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const triggerPageLoad = () => {
    setIsAnimating(true);
    setPageLoaded(true);
    
    // Reset después de las animaciones
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  const getDelay = (baseDelay: number) => {
    return pageLoaded ? baseDelay : baseDelay + 0.5; // Delay extra en primera carga
  };

  useEffect(() => {
    // Auto-trigger en mount
    const timer = setTimeout(() => {
      triggerPageLoad();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider value={{ 
      pageLoaded, 
      triggerPageLoad, 
      getDelay, 
      isAnimating 
    }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};