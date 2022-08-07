import React from "react";
import { useRouter } from "next/router";
import { AddToCartBtn } from "../styles/ProductDetails";
//getting users payment history
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
// console.log(stripe);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);
    console.log(session);
    const stripeId = session.user[`http://localhost:3000/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});
function profile(props) {
  const { push } = useRouter();
  console.log(props.orders);
  // console.log(props.user);

  return (
    <div>
      <AddToCartBtn
        onClick={() => {
          push(`/api/auth/logout`);
        }}
      >
        Logout
      </AddToCartBtn>
    </div>
  );
}

export default profile;
