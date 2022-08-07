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
    let paymentIntents;
    if (session.user) {
      const stripeId = session.user[`http://localhost:3000/stripe_customer_id`];
      paymentIntents = await stripe.paymentIntents.list({
        customer: stripeId,
      });
    }
    return { props: { orders: paymentIntents ? paymentIntents.data : null } };
  },
});
function profile(props) {
  const { push } = useRouter();
  console.log(props.orders);
  console.log(props.user);

  return (
    <div>
      {props.user && (
        <>
          <div>
            {props.orders &&
              props.orders.map((o) => {
                return (
                  <div>
                    <h1>{o.id}</h1>
                  </div>
                );
              })}
          </div>
          <AddToCartBtn
            onClick={() => {
              push(`/api/auth/logout`);
            }}
          >
            Logout
          </AddToCartBtn>
        </>
      )}
    </div>
  );
}

export default profile;
