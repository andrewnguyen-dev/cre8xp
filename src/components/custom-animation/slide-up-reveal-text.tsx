import { motion } from 'framer-motion';

interface SlideUpRevealTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const SlideUpRevealText: React.FC<SlideUpRevealTextProps> = ({
  text,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20, clipPath: 'inset(0 0 120% 0)' }}
      animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay,
      }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default SlideUpRevealText;
