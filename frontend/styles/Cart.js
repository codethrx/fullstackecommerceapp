import styled from "styled-components";
import { motion } from "framer-motion";
export const CartWrapper = styled(motion.div)`
  position: fixed;
  background: rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;
export const CartContainer = styled(motion.div)``;
export const EmptyCartContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CartWrapperContainer = styled(motion.div)`
  height: 100%;
  width: 30%;
  padding: 1rem;
  overflow-y: auto;

  background: #fafafa;
`;
export const Purchase = styled(motion.div)`
  padding: 2rem;
  margin: 0 0.2rem;
`;
