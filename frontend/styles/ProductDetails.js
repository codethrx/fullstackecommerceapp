import styled from "styled-components";
///react fonts.
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
export const ProductDetailsStyles = styled.div`
  display: flex;
  /* background-color: green; */
  margin-top: 14px;
  justify-content: space-between;
  img {
    width: 50%;
  }
  > div {
    padding: 0 1.4rem;
    p {
      padding: 1rem 0;
    }
  }
`;
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 10px;
  }
  svg {
    margin-right: 10px;
  }
`;
export const RoundedCartIncrementBtn = styled(AiFillPlusCircle)`
  cursor: pointer;

  :hover {
    color: white;
    background: black;
    border-radius: 50%;
  }
`;
export const RoundedCartDecrementBtn = styled(AiFillMinusCircle)`
  cursor: pointer;

  :hover {
    color: white;
    background: black;
    border-radius: 50%;
  }
`;
export const AddToCartBtn = styled.div`
  margin: 0;
  outline: 0;
  background-color: black;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0rem;
  margin-top: 20px;
  width: 400px;
  cursor: pointer;
  transition: background 0.5s ease;
  :hover {
    border: 1px solid black;
    background-color: transparent;
    color: black;
  }
`;
