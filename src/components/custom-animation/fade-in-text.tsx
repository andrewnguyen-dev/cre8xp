import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  triggerOnce?: boolean;
  fromY?: number;
}

const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  amount = 0.1,
  triggerOnce = true,
  fromY = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
    once: triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: fromY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: fromY }}
      transition={{
        duration,
        ease: "easeOut",
        delay: isInView ? delay : 0,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeInText;
