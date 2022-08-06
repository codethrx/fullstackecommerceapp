import React from "react";
//Styles
import { CartItemStyles } from "../styles/CartItem";
import {
  Quantity,
  RoundedCartDecrementBtn,
  RoundedCartIncrementBtn,
} from "../styles/ProductDetails";
//context
import useStateContext from "../libs/context";
function CartItem({ title, price, qty, image, slug }) {
  //context
  const { onAddCartItem, onRemoveCartItem } = useStateContext();
  return (
    <CartItemStyles>
      <img src={image?.data.attributes.formats.small.url} alt={title} />
      <div>
        <h3>{title}</h3>
        <h4>{price}$</h4>
        <Quantity>
          <span>Quantity</span>
          <RoundedCartDecrementBtn
            fontSize={21}
            onClick={() => onRemoveCartItem(slug)}
          />
          <span>{qty}</span>
          <RoundedCartIncrementBtn
            fontSize={21}
            onClick={() => onAddCartItem(slug)}
          />
        </Quantity>
      </div>
    </CartItemStyles>
  );
}

export default CartItem;
