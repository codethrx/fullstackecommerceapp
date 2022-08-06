import React from "react";
//Next js router
import { useRouter } from "next/router";
//graphql
import { useQuery } from "urql";
import { getSingleProduct } from "../../libs/query";
//styles
import {
  ProductDetailsStyles,
  Quantity,
  AddToCartBtn,
  RoundedCartDecrementBtn,
  RoundedCartIncrementBtn,
} from "../../styles/ProductDetails";
//State from context
import useStateContext from "../../libs/context";
function ProductDetails() {
  //State from context
  const { qty, increaseQty, decreaseQty, cartItems, onAdd, resetQty } =
    useStateContext();
  //side effects
  React.useEffect(() => {
    resetQty();
  }, []);
  //router
  const router = useRouter();
  const { slug: query } = router.query;
  //graphql
  const [response] = useQuery({
    query: getSingleProduct,
    variables: { slug: query },
  });
  const { fetching, error } = response;
  const data = response?.data?.products.data[0].attributes;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no error in fetching data...</p>;

  return (
    <>
      {data && (
        <ProductDetailsStyles>
          <img
            src={data?.image.data.attributes.formats.large.url}
            alt={data.slug}
          />
          <div>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <Quantity>
              <span>Quantity</span>
              <RoundedCartDecrementBtn fontSize={21} onClick={decreaseQty} />
              <span>{qty}</span>
              <RoundedCartIncrementBtn onClick={increaseQty} fontSize={21} />
            </Quantity>
            <AddToCartBtn
              onClick={() => {
                onAdd(data, qty);
              }}
            >
              Add to Cart
            </AddToCartBtn>
          </div>
        </ProductDetailsStyles>
      )}
    </>
  );
}

export default ProductDetails;
