import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };

  // Proper J shape: vertical line on left, curves to the left at bottom
  const jPath =
    "M 280 60 L 280 280 Q 280 360 200 360 Q 120 360 120 300";

  // Top horizontal line (serif)
  const topLine = "M 220 60 L 350 60";

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full stroke-accent"
      >
        {/* Top horizontal line */}
        <motion.path
          d={topLine}
          strokeWidth="60"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />
        
        {/* Main J shape */}
        <motion.path
          d={jPath}
          strokeWidth="60"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}