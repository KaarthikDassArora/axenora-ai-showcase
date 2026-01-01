import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export const IntroLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 60px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--primary) / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden"
              >
                <img src={logo} alt="Axenora AI" className="h-20 w-20 object-contain" />
              </motion.div>
              
              {/* Orbiting particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-primary"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [0, 60, 0, -60, 0],
                    y: [-60, 0, 60, 0, -60],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl font-bold gradient-text">Axenora AI</h1>
              <p className="text-muted-foreground text-sm mt-2">AI Systems for Business Growth</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-48"
            >
              <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-center text-xs text-muted-foreground mt-2">{progress}%</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
