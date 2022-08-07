import React from "react";
//Context
import useStateContext from "../libs/context";
//import icons
import { BsFillCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { RiTShirtFill } from "react-icons/ri";
// import { FaShoppingCart } from "react-icons/fa";
// import { TbShirt } from "react-icons/tb";

//styles
import { StyledNav, NavItems, Profile } from "../styles/Navbar";
//Link
import Link from "next/link";
//Components
import Cart from "./Cart";
import TotalItems from "./TotalItems";
//animes
import { AnimatePresence } from "framer-motion";
import { pulsingAnime } from "../libs/animes";
//auth0
import { useUser } from "@auth0/nextjs-auth0";
//router
import { useRouter } from "next/router";
function Navbar() {
  const { user, error, isLoading } = useUser();
  const { push } = useRouter();
  console.log(user);
  //Context
  const { toggleCart, showCart, totalItems } = useStateContext();
  return (
    <StyledNav>
      <Link href={`/`} id="logo">
        <h1>ThrX</h1>
      </Link>
      <ul>
        <NavItems onClick={toggleCart}>
          {totalItems >= 1 && (
            <TotalItems qty={totalItems} pulsingAnime={pulsingAnime} />
          )}
          <BsFillCartFill />
          <p>Cart</p>
        </NavItems>
        {!user ? (
          <NavItems
            onClick={() => {
              push(`/api/auth/login`);
            }}
          >
            <CgProfile />
            <p>Profile</p>
          </NavItems>
        ) : (
          <NavItems
            onClick={() => {
              push(`/api/auth/logout`);
            }}
          >
            <Profile src={user.picture} />
            <p>{user.name}</p>
          </NavItems>
        )}
      </ul>{" "}
      <AnimatePresence>{showCart && <Cart />} </AnimatePresence>
    </StyledNav>
  );
}

export default Navbar;
