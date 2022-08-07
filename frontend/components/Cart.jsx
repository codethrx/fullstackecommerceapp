import React from "react";
//context
import useStateContext from "../libs/context";
//styles
import {
  CartWrapper,
  CartContainer,
  EmptyCartContainer,
  CartWrapperContainer,
  Purchase,
} from "../styles/Cart";
//Components
import CartItem from "./CartItem";
import { AddToCartBtn } from "../styles/ProductDetails";
//animes
import { slideAnime, opacityAnime } from "../libs/animes";
//stripe
import getStripe from "../libs/getStripe";
function Cart() {
  //context
  const { closeCart, cartItems, totalPrice } = useStateContext();
  //JSX templates
  const mappedCartItems = cartItems.length >= 1 && (
    <CartContainer layout>
      {cartItems.map(({ title, qty, price, image, slug }) => (
        <CartItem
          key={slug}
          title={title}
          qty={qty}
          price={price}
          image={image}
          slug={slug}
        />
      ))}
    </CartContainer>
  );
  //event handlers
  const handleCheckOut = async () => {
    try {
      const stripe = await getStripe();
      const response = await fetch(`/api/stripe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      });
      const data = await response.json();
      // console.log(data.session.id);
      await stripe.redirectToCheckout({ sessionId: data.session.id });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CartWrapper onClick={closeCart}>
      <CartWrapperContainer
        layout
        onClick={(e) => e.stopPropagation()}
        variants={slideAnime}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {cartItems.length === 0 && (
          <EmptyCartContainer>
            <h2>Oops!! You don't have any items..</h2>
          </EmptyCartContainer>
        )}
        {mappedCartItems}
        {cartItems.length >= 1 && (
          <Purchase variants={opacityAnime}>
            <p>Your Total : {totalPrice}$</p>
            <AddToCartBtn onClick={handleCheckOut}>Purchase</AddToCartBtn>
          </Purchase>
        )}
      </CartWrapperContainer>
    </CartWrapper>
  );
}

export default Cart;
