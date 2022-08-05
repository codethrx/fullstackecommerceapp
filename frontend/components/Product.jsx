import React from "react";

function Product(props) {
  const { title, price, image, slug } = props;
  const url = image?.data.attributes.formats.small.url;
  // console.log(url);
  return (
    <div>
      <img src={url} alt={slug} />

      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
}

export default Product;
