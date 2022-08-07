import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        allow_promotion_codes: true,

        shipping_options: [
          { shipping_rate: "shr_1LU4FWKSApZ8biL62ZsAyFp5" },
          { shipping_rate: `shr_1LU4ZIKSApZ8biL629O1hNkA` },
        ],
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
    } catch (e) {
      res.json({ message: e.message });
    }
  }
}
