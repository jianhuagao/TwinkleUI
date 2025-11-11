'use client';

import { useContext, useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import BackgroundContext from '@/context/backgroundContext';

const styles = {
  homepage: {
    '--before-top': '15%',
    '--before-left': '30%',
    '--after-top': '17%',
    '--after-left': '60%'
  },
  otherPage: {
    '--before-top': '90%',
    '--before-left': '0',
    '--after-top': '5%',
    '--after-left': '95%'
  }
};

const BackgroundComponent: React.FC = () => {
  const pathname = usePathname();
  const backgroundContext = useContext(BackgroundContext);
  const backgroundRef = useRef<HTMLDivElement>(null);
  // 使用useMemo计算positionStyles
  const positionStyles = useMemo(() => {
    // 如果有context提供的样式并且在首页，优先使用context样式
    if (backgroundContext?.positionStyles && pathname === '/') {
      return backgroundContext.positionStyles;
    }
    // 否则根据路径使用不同样式
    return pathname === '/' ? styles.homepage : styles.otherPage;
  }, [backgroundContext?.positionStyles, pathname]);

  // 直接在一个useEffect中应用样式到DOM
  useEffect(() => {
    const backgroundElement = backgroundRef.current;
    if (!backgroundElement) return;

    for (const [key, value] of Object.entries(positionStyles)) {
      backgroundElement.style.setProperty(key, value);
    }
  }, [positionStyles]);

  return <div ref={backgroundRef} className="main-background pointer-events-none"></div>;
};

export default BackgroundComponent;
