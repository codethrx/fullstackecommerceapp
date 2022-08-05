//importing styled components
import styled from "styled-components";
//creating the styles
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.5rem;
  margin-top: 10px;
`;
// exporting
export { Gallery };
