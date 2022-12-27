import { motion } from "framer-motion";

interface ISection {
  children: React.ReactNode;
  delay?: number;
}

export const Section = ({ children, delay = 0 }: ISection) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};
