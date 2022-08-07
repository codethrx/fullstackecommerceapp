import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { getSession } from "@auth0/nextjs-auth0";
export default async function handler(req, res) {
  const session = getSession(req, res);
  const user = session?.user;
  let stripeID;
  if (user) {
    stripeID = user["http://localhost:3000/stripe_customer_id"];
  }
  if (req.method === "POST") {
    try {
      if (user) {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          customer: stripeID,
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["US", "CA"],
          },
          allow_promotion_codes: true,

          // shipping_options: [
          //   { shipping_rate: "shr_1LU7uSL4pRpYHrMsWpOZuRp5" },
          //   { shipping_rate: `shr_1LU7u5L4pRpYHrMs0zU9jY1Y` },
          // ],
          line_items: req.body.map((item) => ({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },

              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 0,
            },
            quantity: item.qty,
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json({ session });
      } else {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          // customer: stripeID,
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["US", "CA"],
          },
          allow_promotion_codes: true,

          // shipping_options: [
          //   { shipping_rate: "shr_1LU7uSL4pRpYHrMsWpOZuRp5" },
          //   { shipping_rate: `shr_1LU7u5L4pRpYHrMs0zU9jY1Y` },
          // ],
          line_items: req.body.map((item) => ({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },

              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 0,
            },
            quantity: item.qty,
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json({ session });
      }
    } catch (e) {
      res.json({ message: e.message });
    }
  }
}
