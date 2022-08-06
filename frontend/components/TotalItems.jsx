import React from "react";
//styles
import { TotalItemsStyles } from "../styles/TotalItems";
function TotalItems({ qty }) {
  return (
    <TotalItemsStyles>
      <p>{qty}</p>
    </TotalItemsStyles>
  );
}

export default TotalItems;
