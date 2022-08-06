import styled from "styled-components";
import { motion } from "framer-motion";
export const TotalItemsStyles = styled(motion.div)`
  background-color: red;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: -10px;

  p {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
