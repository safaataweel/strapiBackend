// config/plugins.js
module.exports = ({ env }) => ({
  // Admin panel configurations
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'safaa'),
    },
  },
});
