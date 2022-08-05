import React, { useState } from "react";
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

function ProductDetails() {
  //state
  const [quantity, setQuantity] = useState(0);
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
  //event listeners
  const handleIncrementClick = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const handleDecrementClick = () => {
    setQuantity((prevQty) => (prevQty > 0 ? prevQty - 1 : 0));
  };
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
              <RoundedCartDecrementBtn
                fontSize={21}
                onClick={handleDecrementClick}
              />
              <span>{quantity}</span>
              <RoundedCartIncrementBtn
                fontSize={21}
                onClick={handleIncrementClick}
              />
            </Quantity>
            <AddToCartBtn>Add to Cart</AddToCartBtn>
          </div>
        </ProductDetailsStyles>
      )}
    </>
  );
}

export default ProductDetails;
