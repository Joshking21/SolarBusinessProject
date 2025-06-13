'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function LightbulbLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),500); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-20 h-20"
              initial={{ scale: 1 }}
              animate={{
                x: [0, -2, 2, -1, 1, 0], // gentle shake
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
              }}
            >
              <motion.div
                animate={{
                  color: [
                    'rgb(204 153 0)',   // darker yellow (#cc9900)
                    'rgb(255 223 85)',  // lighter yellow (#ffdf55)
                    'rgb(204 153 0)',   // back to darker yellow
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,  // 2 seconds for one full pulse cycle
                  ease: "easeInOut",
                }}
              >
                <Lightbulb className="w-full h-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}