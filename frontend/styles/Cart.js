import styled from "styled-components";

export const CartWrapper = styled.div`
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
export const CartContainer = styled.div``;
export const EmptyCartContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CartWrapperContainer = styled.div`
  height: 100%;
  width: 30%;
  padding: 1rem;
  overflow-y: auto;

  background: #fafafa;
`;
export const Purchase = styled.div`
  padding: 2rem;
  margin: 0 0.2rem;
`;
