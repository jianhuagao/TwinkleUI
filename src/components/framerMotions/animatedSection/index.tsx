'use client';

import { motion } from 'motion/react';
import { memo, useEffect, useState } from 'react';

const animationVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.3
    }
  }
};

const ChildVariants = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6 } }
};

const AnimatedSection = ({ children, className }: { children: React.ReactNode[]; className?: string }) => {
  // 使用useState的函数形式直接检测客户端
  const [isVisible, setIsVisible] = useState(false);
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    // 只在客户端执行定时器逻辑
    const timer = setTimeout(() => setIsVisible(true), 100); // 延迟以避免初次显示
    return () => clearTimeout(timer); // 清理定时器
  }, []);

  if (!isClient) return null; // 确保在客户端渲染

  return (
    <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={animationVariants} className={className}>
      {children.map((child, index) => (
        <motion.span key={index} variants={ChildVariants}>
          {child}
        </motion.span>
      ))}
      {/* Continue with more elements */}
    </motion.div>
  );
};

export default memo(AnimatedSection);
