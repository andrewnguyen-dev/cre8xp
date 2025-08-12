import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        ease: 'easeOut',
        delay,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeInText;
