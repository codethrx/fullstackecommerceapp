import styled from "styled-components";

//styles creation
export const StyledNav = styled.nav`
  min-height: 12vh;
  display: flex;
  align-items: center;
  /* background: red; */
  justify-content: space-between;
  color: black;
  width: 100%;
  a {
    color: black;
    cursor: pointer;
  }
  #logo {
    color: black;
    flex: 1;
    cursor: pointer;

    > h1 {
      font-family: "Inspiration", cursive;
    }
    /* background: olive; */
  }
  ul {
    display: flex;
  }
`;

export const NavItems = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem 0%;
  /* background: green; */
  :hover {
    color: gray;
  }
  svg {
    font-size: 1.3rem;
    transition: transform 0.5s ease;
  }
  :hover svg {
    transform: translateY(-5px);
  }
  position: relative;
  /* background-color: red; */
`;
export const Profile = styled.img`
  height: 27px;
  width: 27px;
  object-fit: cover;
  border-radius: 50%;
`;
