//importing styled components
import styled from "styled-components";
//Creating the stylees
const ProductStyles = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
  padding: 1rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 50vh;
    cursor: pointer;
  }
`;
//exporting
export { ProductStyles };
