import React from "react";
//styles
import { TotalItemsStyles } from "../styles/TotalItems";
import { motion } from "framer-motion";
function TotalItems({ qty, pulsingAnime }) {
  return (
    <TotalItemsStyles
      layout
      variants={pulsingAnime}
      initial="hidden"
      animate="show"
    >
      <motion.p layout>{qty}</motion.p>
    </TotalItemsStyles>
  );
}

export default TotalItems;
