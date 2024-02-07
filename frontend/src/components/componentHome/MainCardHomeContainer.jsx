import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MainCardHome from "./MainCardHome";
import MainCardHome2 from "./MainCardHome2";
import MainCardHome3 from "./MainCardHome3";
import styles from "./MainCardHomeContainer.module.css";

export default function AnimeBg() {
  const [index, setIndex] = useState(0);
  const composants = [<MainCardHome />, <MainCardHome2 />, <MainCardHome3 />];

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % composants.length);
    }, 6000); // Durée de transition en ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.positionContainer}>
      <AnimatePresence>
        <Container sx={{ pt: "10rem" }}>
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            {composants[index]}
          </motion.div>
        </Container>
      </AnimatePresence>
    </div>
  );
}
