// config/functions/bootstrap.js
'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const { Server } = require('socket.io');


    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin:process.env.FRONTEND_URL || 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
      },
    });


    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);


      socket.on('documentUpdated', (data) => {
        console.log('Document updated:', data);


        io.emit('documentUpdate', data);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
      });
    });


    strapi.io = io;
  },
};
