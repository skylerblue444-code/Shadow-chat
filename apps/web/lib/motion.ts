import { Variants } from "framer-motion";

export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};