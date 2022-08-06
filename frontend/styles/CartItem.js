import styled from "styled-components";
export const CartItemStyles = styled.div`
  /* cursor: pointer; */
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 40%;
    height: 20vh;
    /* testing.. */
    /* height: 50vh; */
    object-fit: cover;
  }
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.8rem;
  }
  span {
    font-size: 0.8rem;
  }
`;
