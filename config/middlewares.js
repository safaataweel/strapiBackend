
// config/middlewares.js
module.exports = {
  settings: {
    cors: {
      origin: '*', // Or specify your frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
    },
  },
};
