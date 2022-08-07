import React from "react";
import { useRouter } from "next/router";

const stripe = require(`stripe`)(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
export const getServerSideProps = async (params) => {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    { expand: [`line_items`] }
  );
  return { props: { order } };
};
function success({ order }) {
  console.log(order);
  return (
    <div>
      <h1>Confirmation email sent to :{order.customer_details.email}</h1>
      <h4>Address</h4>
      {Object.entries(order.customer_details.address).map(([key, val]) => {
        return (
          <p key={key}>
            {key}:{val}
          </p>
        );
      })}
    </div>
  );
}

export default success;
