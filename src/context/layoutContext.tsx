'use client';

// context/layoutContext.tsx
import { createContext, useState, useEffect, ReactNode } from 'react';

interface layoutContextType {
  layout: 'vertical' | 'horizontal';
  toggleLayout: () => void;
}

const layoutContext = createContext<layoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [layout, setLayout] = useState<'vertical' | 'horizontal'>(() => {
    if (typeof window !== 'undefined') {
      const storedLayout = localStorage.getItem('layout');
      if (storedLayout) {
        return storedLayout as 'vertical' | 'horizontal';
      }
      // 修复媒体查询，使用更合理的默认布局逻辑
      const isMobile = window.innerWidth < 768;
      return isMobile ? 'vertical' : 'horizontal';
    }
    return 'vertical';
  });

  useEffect(() => {
    if (layout === 'horizontal') {
      document.documentElement.classList.add('horizontal');
    } else {
      document.documentElement.classList.remove('horizontal');
    }
  }, [layout]);

  const toggleLayout = () => {
    const newLayout = layout === 'vertical' ? 'horizontal' : 'vertical';
    setLayout(newLayout);
    localStorage.setItem('layout', newLayout);
  };

  return <layoutContext.Provider value={{ layout, toggleLayout }}>{children}</layoutContext.Provider>;
};

export default layoutContext;
