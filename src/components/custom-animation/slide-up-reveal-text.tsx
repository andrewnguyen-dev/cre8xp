import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideUpRevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  splitByLines?: boolean;
}

const SlideUpRevealText: React.FC<SlideUpRevealTextProps> = ({
  children,
  delay = 0,
  className = '',
  splitByLines = false,
}) => {
  if (!splitByLines) {
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
  } else {
    // Assume children is a string for line splitting
    const text = typeof children === 'string' ? children : '';
    const lines = text.split('\n');
    return (
      <div className={className}>
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, y: 20, clipPath: 'inset(0 0 120% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: delay + index * 0.5,
            }}
            className="block"
          >
            {line}
          </motion.div>
        ))}
      </div>
    );
  }
};

export default SlideUpRevealText;