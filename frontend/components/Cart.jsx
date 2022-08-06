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
function Cart() {
  //context
  const { closeCart, cartItems, totalPrice } = useStateContext();
  //JSX templates
  const mappedCartItems = cartItems.length >= 1 && (
    <CartContainer>
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
  return (
    <CartWrapper onClick={closeCart}>
      <CartWrapperContainer onClick={(e) => e.stopPropagation()}>
        {cartItems.length === 0 && (
          <EmptyCartContainer>
            <h2>Oops!! You don't have any items..</h2>
          </EmptyCartContainer>
        )}
        {mappedCartItems}
        {cartItems.length >= 1 && (
          <Purchase>
            <p>Your Total : {totalPrice}$</p>
            <AddToCartBtn>Purchase</AddToCartBtn>
          </Purchase>
        )}
      </CartWrapperContainer>
    </CartWrapper>
  );
}

export default Cart;
