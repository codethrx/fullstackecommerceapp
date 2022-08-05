module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fa44c2527af7c8f36ff6cd704496b56'),
  },
});
