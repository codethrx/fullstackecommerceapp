module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a12e4ca06dca78abf3b6360c94442fbe'),
  },
});
