import React from "react";
//styles
import { ProductStyles } from "../styles/Product";
//router
import { useRouter } from "next/router";
function Product(props) {
  const { title, price, image, slug } = props;
  const url = image?.data.attributes.formats.small.url;
  const { push } = useRouter();
  //event handlers
  const redirectToDetailPage = (slug) => {
    push(`/product/${slug}`);
  };
  return (
    <ProductStyles>
      <img
        src={url}
        alt={slug}
        onClick={() => {
          redirectToDetailPage(slug);
        }}
      />
      <h2>{title}</h2>
      <h3>${price}</h3>
    </ProductStyles>
  );
}

export default Product;
