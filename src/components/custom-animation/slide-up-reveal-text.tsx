import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideUpRevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SlideUpRevealText: React.FC<SlideUpRevealTextProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20, clipPath: 'inset(0 0 120% 0)' }}
      animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpRevealText;
